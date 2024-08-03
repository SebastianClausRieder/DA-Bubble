import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { GlobalJSService } from '../../services/global-js.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {
  signUp: boolean = false;

  formValid: boolean | null = null;

  globalJSData = inject(GlobalJSService);

  passwordFieldType: string = 'password';
  passwordFieldEye: string = 'assets/img/icons/eye-out.png';

  loginData = {
    mail: "",
    password: ""
  }

  ngOnInit() {
    this.globalJSData.signUp$.subscribe(value => this.signUp = value);
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm.form.valid);
    ngForm.resetForm();
  }

  togglePasswordFieldType() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    this.passwordFieldEye = this.passwordFieldEye === 'assets/img/icons/eye-out.png' ? 'assets/img/icons/eye.png' : 'assets/img/icons/eye-out.png';
  }
}
