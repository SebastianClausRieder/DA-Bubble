import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  doc,
  Firestore,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { concatMap, from, map, Observable, take, tap } from 'rxjs';
import { Chat, Message } from './../models/chat';
import { ProfileUser } from './../models/user-profile';
import { NgForm } from '@angular/forms';
import { onSnapshot } from 'firebase/firestore';
import { UserdataService } from './userdata.service';

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  firestore: Firestore = inject(Firestore);
  currentUser = this.userdataService.currentUser;
  currentChatId?: string;
  allChats: any = [];
  currentChat: any = {};

  constructor(public userdataService: UserdataService) {}

  async createChat(otherUser: any) {
    let data = {
      usersIds: [this.currentUser.uid, otherUser.uid],
      users: [
        {
          displayName: this.currentUser.name,
        },
        { displayName: otherUser.name },
      ],
    };
    const ref = collection(this.firestore, 'chats');
    const querySnapshot = await addDoc(ref, data);
    const uid = querySnapshot.id;
    await setDoc(querySnapshot, { ...data, uid });
  }

  async isExistingChat(otherUserID: string): Promise<boolean> {
    const ref = query(collection(this.firestore, 'chats'));
    const querySnapshot = await getDocs(ref);
    let found = false;
    querySnapshot.forEach((doc: any) => {
      if (doc.data().usersIds.includes(otherUserID)) {
        found = true;
        return;
      }
    });
    return found;
  }

  async getCurrentChat(otherUserID: string) {
    await this.getAllChats();
    console.log('this is all chats', this.allChats);
    const chat = this.allChats.find(
      (chat: { usersIds: string | any[] }) =>
        chat.usersIds.length === 2 &&
        chat.usersIds[0] === this.currentUser.uid &&
        chat.usersIds[1] === otherUserID
    );
    console.log('this is current chat', chat);
    this.currentChat = chat;
    this.getMessages(this.currentChat);
  }
  async getAllChats() {
    const ref = query(
      collection(this.firestore, 'chats'),
      where('usersIds', 'array-contains', this.currentUser.uid)
    );
    const querySnapshot = await getDocs(ref);
    this.allChats = [];
    querySnapshot.forEach((doc: any) => {
      this.allChats.push(doc.data());
    });

    console.log('get all the chats', this.allChats);

    // const querySnapshot = onSnapshot(ref, (querySnapshot) => {
    //   this.allChats = [];
    //   querySnapshot.forEach((doc: any) => {
    //     this.allChats.push(doc.data());
    //   });
    //   console.log('get all the chats', this.allChats);
    // });
  }

  sendMessage(sentMessage: string) {
    const ref = collection(
      this.firestore,
      'chats',
      this.currentChat.uid,
      'messages'
    );

    const querySnapshot = addDoc(ref, {
      text: sentMessage,
      sentBy: this.currentUser.uid,
      sentByName: this.currentUser.name,
      sentAt: Timestamp.fromDate(new Date()),
    });
    console.log('the message is sent', querySnapshot);
  }

  allMessages: any[] = [];

  getMessages(currentChat: any) {
    console.log('this is current messages', currentChat);
    const ref = onSnapshot(
      collection(this.firestore, 'chats', currentChat.uid, 'messages'),
      (querySnapshot) => {
        this.allMessages = [];
        querySnapshot.forEach((doc: any) => {
          let data = doc.data();
          data.id = doc.id;
          this.allMessages.push(data);
          this.allMessages.sort((a, b) => {
            if (a.sentAt.seconds === b.sentAt.seconds) {
              return a.sentAt.nanoseconds - b.sentAt.nanoseconds;
            } else {
              return a.sentAt.seconds - b.sentAt.seconds;
            }
          });
        });
      }
    );
  }
}
