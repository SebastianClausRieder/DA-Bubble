import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { GlobalJSService } from '../../services/global-js.service';

@Component({
  selector: 'app-toggle-contain',
  standalone: true,
  imports: [
    CommonModule,
],
  templateUrl: './toggle-contain.component.html',
  styleUrl: './toggle-contain.component.scss'
})
export class ToggleContainComponent implements OnInit {
  signUp: boolean = false;

  globalJSData = inject(GlobalJSService);

  ngOnInit() {
    this.globalJSData.signUp$.subscribe(value => this.signUp = value);
  }

  toggleSignUp() {
    this.globalJSData.toggleSignUp();
  }

}
