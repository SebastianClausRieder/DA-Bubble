import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { GlobalJSService } from '../../services/global-js.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {
  signUp: boolean = false;

  globalJSData = inject(GlobalJSService);

  ngOnInit() {
    this.globalJSData.signUp$.subscribe(value => this.signUp = value);
  }
}
