import { inject, Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { UserdataService } from './userdata.service';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  firestore: Firestore = inject(Firestore);
  currentUser = this.userdataService.currentUser;
  allUsers = this.userdataService.allUsers;
  constructor(public userdataService: UserdataService) {}

  async createNewChannel(newChannel: any) {
    console.log('newChannel', newChannel);
    console.log(this.allUsers);
    let data = {
      name: newChannel.name,
      description: newChannel.description,
      members: newChannel.members,
      usersIds: [this.currentUser.uid],
      users: [
        {
          displayName: this.currentUser.name,
        },
      ],
    };
    const ref = collection(this.firestore, 'channels');
    const querySnapshot = await addDoc(ref, data);
  }
}
