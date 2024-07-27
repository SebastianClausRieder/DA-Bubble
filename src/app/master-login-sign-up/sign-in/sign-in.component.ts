import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../../global-js.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  globalJSData = inject(GlobalJSService);

}
