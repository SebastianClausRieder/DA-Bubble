import { Component, inject } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatDividerModule, MatButtonModule],
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
