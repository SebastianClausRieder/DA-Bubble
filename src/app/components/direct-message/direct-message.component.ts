import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { ChatsService } from '../../services/chats.service';

@Component({
  selector: 'app-direct-message',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './direct-message.component.html',
  styleUrl: './direct-message.component.scss',
})
export class DirectMessageComponent implements OnInit {
  filtering: boolean = true;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public userdataService: UserdataService,
    public chatsService: ChatsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.toogleDirectMessage();
    await this.userdataService.getAllUsers();
  }

  toogleDirectMessage() {
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

  async createChat(user: any) {
    if (await this.chatsService.isExistingChat(user.uid)) {
    } else {
      this.chatsService.createChat(user);
    }
  }
}
