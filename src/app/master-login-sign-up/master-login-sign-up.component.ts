import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ToggleContainComponent } from './toggle-contain/toggle-contain.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GlobalJSService } from '../services/global-js.service';

@Component({
  selector: 'app-master-login-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    SignInComponent,
    SignUpComponent,
    ToggleContainComponent
  ],
  templateUrl: './master-login-sign-up.component.html',
  styleUrl: './master-login-sign-up.component.scss'
})
export class MasterLoginSignUpComponent implements OnInit {
  signUp: boolean = false;

  globalJSData = inject(GlobalJSService);

  ngOnInit() {
    this.globalJSData.signUp$.subscribe(value => this.signUp = value);
  }

}
