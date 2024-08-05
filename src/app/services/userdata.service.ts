import { inject, Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { onSnapshot, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  firestore: Firestore = inject(Firestore);
  allUsers: any = [];
  constructor() {}

  async saveUser() {
    let data = {
      adresse: {
        street: 'maine street 40',
        city: '52062 Aachen',
      },
      name: 'Hanbit Chang',
      email: 'test@example.com',
      password: '1234',
      phone: '012312345678',
    }; // Remove the empty uid property

    const docRef = await addDoc(collection(this.firestore, 'usersData'), data);
    const uid = docRef.id;
    await setDoc(docRef, { ...data, uid });
  }

  async getCurrentUser() {}

  async getAllUsers() {
    onSnapshot(collection(this.firestore, 'usersData'), (querySnapshot) => {
      this.allUsers = [];
      querySnapshot.forEach((doc: any) => {
        let data = doc.data();
        data.id = doc.id;
        console.log('received Changes from DB', data);
        this.allUsers.push(data);
      });
    });
  }
}
