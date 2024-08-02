import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-message',
  standalone: true,
  imports: [],
  templateUrl: './direct-message.component.html',
  styleUrl: './direct-message.component.scss',
})
export class DirectMessageComponent implements OnInit {
  filtering: boolean = true;
  constructor() {}
  ngOnInit(): void {
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
