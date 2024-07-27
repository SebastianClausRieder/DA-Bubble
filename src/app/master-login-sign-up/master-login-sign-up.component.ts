import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleContainComponent } from './toggle-contain/toggle-contain.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

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
export class MasterLoginSignUpComponent {

}
