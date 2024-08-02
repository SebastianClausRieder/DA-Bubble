import { inject, Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  firestore: Firestore = inject(Firestore);
  constructor() {}
  async saveUser() {
    await addDoc(collection(this.firestore, 'usersData'), {
      name: 'Hanbit',
    }).then((result: any) => {
      console.log('Added Hanbit', result);
    });
  }
}
