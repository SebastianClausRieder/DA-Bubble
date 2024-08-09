import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  Timestamp,
  where,
} from '@angular/fire/firestore';
import { UserdataService } from './userdata.service';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  firestore: Firestore = inject(Firestore);
  currentUser = this.userdataService.currentUser;
  allUsers = this.userdataService.allUsers;
  allChannels: any = [];
  currentChannel: any = {};
  constructor(public userdataService: UserdataService) {}

  async createNewChannel(newChannel: any) {
    console.log(this.allUsers);
    let data = {
      name: newChannel.name,
      description: newChannel.description,
      usersIds: [this.currentUser.uid],
      users: [
        {
          displayName: this.currentUser.name,
        },
      ],
    };

    newChannel.members.forEach((member: any) => {
      let value = member.split(',');
      data.users.push({ displayName: value[0] });
      data.usersIds.push(value[1]);
    });
    const ref = collection(this.firestore, 'channels');
    const querySnapshot = await addDoc(ref, data);
    const uid = querySnapshot.id;
    await setDoc(querySnapshot, { ...data, uid });
    alert('channel created');
  }

  async getAllChannels() {
    const ref = query(
      collection(this.firestore, 'channels'),
      where('usersIds', 'array-contains', this.currentUser.uid)
    );
    const querySnapshot = await getDocs(ref);
    this.allChannels = [];
    querySnapshot.forEach((doc: any) => {
      this.allChannels.push(doc.data());
    });
  }

  async getCurrentChannel(channelId: string) {
    await this.getAllChannels();
    const channel = this.allChannels.find(
      (channel: { uid: string | any[] }) => channel.uid == channelId
    );
    this.currentChannel = channel;
    this.getMessages(this.currentChannel);
  }

  async sendMessage(sentMessage: string) {
    const ref = collection(
      this.firestore,
      'channels',
      this.currentChannel.uid,
      'messages'
    );

    const querySnapshot = await addDoc(ref, {
      text: sentMessage,
      sentBy: this.currentUser.uid,
      sentByName: this.currentUser.name,
      sentAt: Timestamp.fromDate(new Date()),
    });
  }

  allMessages: any[] = [];
  getMessages(currentChannel: any) {
    console.log('this is current messages', currentChannel);
    const ref = onSnapshot(
      collection(this.firestore, 'channels', currentChannel.uid, 'messages'),
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
