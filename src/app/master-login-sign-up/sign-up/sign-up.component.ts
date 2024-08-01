import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { GlobalJSService } from '../../services/global-js.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  signUp: boolean = false;

  formValid: boolean | null = null;

  isValidName: boolean = false;
  isValidMail: boolean = false;
  isValidMessage: boolean = false;
  PPaccept: boolean = false;

  globalJSData = inject(GlobalJSService);

  contactData = {
    mail: "",
    password: ""
  }

  ngOnInit() {
    this.globalJSData.signUp$.subscribe(value => this.signUp = value);
  }

}
