import { Component, inject } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../components/header/header.component';
import { DirectMessageComponent } from '../components/direct-message/direct-message.component';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    RouterModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    HeaderComponent,
    DirectMessageComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  showFiller = false;
  constructor(
    private router: Router,
    public userdataService: UserdataService
  ) {}
}
