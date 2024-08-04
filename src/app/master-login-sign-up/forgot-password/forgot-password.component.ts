import { Component, inject } from '@angular/core';
import { BackArrowComponent } from "../../useful-apps/back-arrow/back-arrow.component";
import { GlobalJSService } from '../../services/global-js.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [BackArrowComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  globalJSData = inject(GlobalJSService);

  backToLogin() {
    this.globalJSData.forgotPW = this.globalJSData.forgotPW === false ? true : false;
  }
}
