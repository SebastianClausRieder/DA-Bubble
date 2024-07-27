import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginCreateAccountComponent } from './login-create-account/login-create-account.component';
import { ToggleContainComponent } from './toggle-contain/toggle-contain.component';

@Component({
  selector: 'app-master-login-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    LoginCreateAccountComponent,
    ToggleContainComponent
  ],
  templateUrl: './master-login-sign-up.component.html',
  styleUrl: './master-login-sign-up.component.scss'
})
export class MasterLoginSignUpComponent {

}
