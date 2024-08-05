// password-strength-checker.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-strong-pw',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './strong-pw.component.html',
  styleUrls: ['./strong-pw.component.scss']
})
export class StrongPWComponent {
  password: string = '';
  passwordStrength: string = '';
  showPassword: boolean = false;

  checkStrength() {
    const strength = this.getStrength(this.password);
    if (strength <= 2) {
      this.passwordStrength = 'weak';
    } else if (strength >= 2 && strength <= 4) {
      this.passwordStrength = 'moderate';
    } else {
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

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
