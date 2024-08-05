import { inject, Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  firestore: Firestore = inject(Firestore);
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

    // Use await directly with addDoc to capture the document reference with ID
    const docRef = await addDoc(collection(this.firestore, 'usersData'), data);

    // Now you can access the auto-generated ID from docRef
    const uid = docRef.id;

    // Update the data with the generated ID and write it to the document
    await setDoc(docRef, { ...data, uid });
  }
}
