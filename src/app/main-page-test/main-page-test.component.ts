import { Component, inject, OnInit } from '@angular/core';
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
  selector: 'app-main-page-test',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    HeaderComponent,
    DirectMessageComponent,
  ],
  templateUrl: './main-page-test.component.html',
  styleUrl: './main-page-test.component.scss',
})
export class MainPageTestComponent implements OnInit {
  constructor(
    private router: RouterModule,
    public userdataService: UserdataService
  ) {}
  ngOnInit(): void {}
}
