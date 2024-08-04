import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { GlobalJSService } from '../../services/global-js.service';
import { FormsModule, NgForm } from '@angular/forms';
import { BackArrowComponent } from "../../useful-apps/back-arrow/back-arrow.component";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BackArrowComponent
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  signUp: boolean = false;
  ready: boolean = false;

  nameResult: boolean | null = null;
  passwordConfirm: boolean | null = null;
  PPaccept: boolean | null = null;
  avatarSelected: boolean = false;

  globalJSData = inject(GlobalJSService);

  passwordFieldTypeOne: string = 'password';
  passwordFieldEyeOne: string = 'assets/img/icons/eye-out.png';

  passwordFieldTypeTwo: string = 'password';
  passwordFieldEyeTwo: string = 'assets/img/icons/eye-out.png';

  myAvatar: string = 'assets/img/avatars/Default-Avatar.png';

  registOneData = {
    name: "",
    mail: "",
    password: "",
    confirmPassword: ""
  }

  ngOnInit() {
    this.globalJSData.signUp$.subscribe(value => this.signUp = value);
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.valid && this.PPaccept) {
      if (this.registOneData.password === this.registOneData.confirmPassword) {
        this.ready = true;
      } else {
        this.passwordConfirm = false;
      }
    }
  }

  validateFullName(name: string) {
    if (name !== null) {
      const parts = name.trim().split(' ');
      this.nameResult = parts.length >= 2 && parts.every(part => part.length > 0);
    }
  }

  togglePasswordFieldOne() {
    this.passwordFieldTypeOne = this.passwordFieldTypeOne === 'password' ? 'text' : 'password';
    this.passwordFieldEyeOne = this.passwordFieldEyeOne === 'assets/img/icons/eye-out.png' ? 'assets/img/icons/eye.png' : 'assets/img/icons/eye-out.png';
  }

  togglePasswordFieldTwo() {
    this.passwordFieldTypeTwo = this.passwordFieldTypeTwo === 'password' ? 'text' : 'password';
    this.passwordFieldEyeTwo = this.passwordFieldEyeTwo === 'assets/img/icons/eye-out.png' ? 'assets/img/icons/eye.png' : 'assets/img/icons/eye-out.png';
  }

  selectAvatar(img: string) {
    this.myAvatar = img;
    this.avatarSelected = true;
  }

  registerWithDABubble(ngForm: NgForm) {
    this.ready = false;
    this.globalJSData.toggleSignUp();

    this.passwordConfirm = null;
    this.PPaccept = null;
    this.passwordStrength = '';
    ngForm.resetForm();
  }

  oneStepBack() {
    this.ready = false;
  }

  // Strong Password Check

  passwordStrength: string = '';
  showPassword: boolean = false;

  checkStrength() {
    const strength = this.getStrength(this.registOneData.password);
    if (strength == 0) {
      this.passwordStrength = '';
    } else if (strength <= 2) {
      this.passwordStrength = 'weak';
    } else if (strength > 2 && strength <= 4) {
      this.passwordStrength = 'moderate';
    } else if (strength > 4) {
      this.passwordStrength = 'strong';
    }
  }

  getStrength(password: string): number {
    let i = 0;
    if (password.length > 6) {
      i++;
    }
    if (password.length >= 10) {
      i++;
    }
    if (/[A-Z]/.test(password)) {
      i++;
    }
    if (/[0-9]/.test(password)) {
      i++;
    }
    if (/[A-Za-z0-8]/.test(password)) {
      i++;
    }
    return i;
  }
}