import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GlobalJSService } from '../../global-js.service';

@Component({
  selector: 'app-toggle-contain',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './toggle-contain.component.html',
  styleUrl: './toggle-contain.component.scss'
})
export class ToggleContainComponent {

  globalJSData = inject(GlobalJSService);

}
