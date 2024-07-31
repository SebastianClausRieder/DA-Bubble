import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'dabubble-8afdd',
        appId: '1:833391969838:web:b5e6be9bbab99013d2c1bf',
        storageBucket: 'dabubble-8afdd.appspot.com',
        apiKey: 'AIzaSyC57pkPbF27oHnj53tN8g5EUKCVa4HHjMo',
        authDomain: 'dabubble-8afdd.firebaseapp.com',
        messagingSenderId: '833391969838',
        measurementId: 'G-XW2MYW8YBP',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
