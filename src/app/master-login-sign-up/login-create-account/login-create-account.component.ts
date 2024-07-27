import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../../global-js.service';

@Component({
  selector: 'app-login-create-account',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './login-create-account.component.html',
  styleUrl: './login-create-account.component.scss'
})
export class LoginCreateAccountComponent {

  globalJSData = inject(GlobalJSService);

}
