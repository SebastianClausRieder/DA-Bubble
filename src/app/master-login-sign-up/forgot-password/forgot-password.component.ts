import { Component, inject } from '@angular/core';
import { BackArrowComponent } from "../../useful-apps/back-arrow/back-arrow.component";
import { GlobalJSService } from '../../services/global-js.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BackArrowComponent
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  globalJSData = inject(GlobalJSService);

  yourMail: string = '';

  backToLogin() {
    this.globalJSData.forgotPW = this.globalJSData.forgotPW === false ? true : false;
  }

  onSubmit(ngForm: NgForm) {

  }
}
