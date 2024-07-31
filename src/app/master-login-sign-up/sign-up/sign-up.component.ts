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

  globalJSData = inject(GlobalJSService);

  ngOnInit() {
    this.globalJSData.signUp$.subscribe(value => this.signUp = value);
  }

}
