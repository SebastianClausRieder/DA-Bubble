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
  Timestamp,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { concatMap, from, map, Observable, take, tap } from 'rxjs';
import { Chat, Message } from './../models/chat';
import { ProfileUser } from './../models/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  firestore: Firestore = inject(Firestore);
  constructor() {}

  async createChat(otherUser: any) {
    const docRef = collection(this.firestore, 'chats');
    await addDoc(docRef, {
      usersIds: ['hanbit', otherUser.uid],
      users: [
        {
          displayName: 'hanbit',
        },
        { displayName: otherUser.name },
      ],
    });
  }

  async isExistingChat(otherUserID: string): Promise<boolean> {
    const docRef = query(collection(this.firestore, 'chats'));
    const querySnapshot = await getDocs(docRef);

    let found = false;
    querySnapshot.forEach((doc: any) => {
      if (doc.data().usersIds.includes(otherUserID)) {
        found = true;
        return;
      }
    });
    return found;
  }
}
