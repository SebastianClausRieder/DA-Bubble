import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatsService } from '../../services/chats.service';

@Component({
  selector: 'app-user-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-chat.component.html',
  styleUrl: './user-chat.component.scss',
})
export class UserChatComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public chatService: ChatsService
  ) {}
  otherUserId: string = '';
  messages: any[] = [];
  sentMessage: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      if (id) {
        this.otherUserId = id;
        this.chatService.getCurrentChat(this.otherUserId);
      } else {
        this.otherUserId = '';
      }
    });

    // this.chatService.getMessages(this.chatService.currentChat);
  }

  async onSubmit(messageForm: NgForm) {
    if (messageForm.valid) {
      let messageInput = <HTMLInputElement>(
        document.getElementById('message-input')
      );
      console.log('this is message', messageForm.value);
      console.log('message', this.sentMessage);
      this.messages.push(this.sentMessage);
      console.log('message', this.messages);
      this.chatService.sendMessage(this.sentMessage);
      messageInput.value = '';
      messageForm.resetForm();
    }
  }
}
