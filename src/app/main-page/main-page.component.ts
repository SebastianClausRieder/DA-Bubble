import { Component, inject } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  firestore: Firestore = inject(Firestore);
  constructor(private router: Router) {}

  async saveUser() {
    await addDoc(collection(this.firestore, 'users'), { name: 'Hanbit' }).then(
      (result: any) => {
        console.log('Added Hanbit', result);
      }
    );
  }
}
