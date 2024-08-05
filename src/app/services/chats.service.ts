import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  doc,
  Firestore,
  getDoc,
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
}
