import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-direct-message',
  standalone: true,
  imports: [],
  templateUrl: './direct-message.component.html',
  styleUrl: './direct-message.component.scss',
})
export class DirectMessageComponent implements OnInit {
  filtering: boolean = true;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const dropdownIcon = document.getElementById('dropdown-icon');
      document.addEventListener('click', (event) => {
        if (dropdownIcon && this.filtering) {
          dropdownIcon.classList.add('rotate-down');
        }
        if (dropdownIcon && !this.filtering) {
          dropdownIcon.classList.remove('rotate-down');
        }
      });
    }
  }
}