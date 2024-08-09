import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  getDocs,
  query,
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
      console.log('value1', value[0]);
      console.log('value2', value[1]);
      data.users.push({ displayName: value[0] });
      data.usersIds.push(value[1]);
    });
    const ref = collection(this.firestore, 'channels');
    const querySnapshot = await addDoc(ref, data).then(() => {
      alert('Channel created');
    });
  }

  async getAllChats() {
    const ref = query(
      collection(this.firestore, 'channels'),
      where('usersIds', 'array-contains', this.currentUser.uid)
    );
    const querySnapshot = await getDocs(ref);
    this.allChannels = [];
    querySnapshot.forEach((doc: any) => {
      this.allChannels.push(doc.data());
    });

    console.log('get all the chats', this.allChannels);
  }
}
