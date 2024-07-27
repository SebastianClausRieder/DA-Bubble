import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../../global-js.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  globalJSData = inject(GlobalJSService);

}
