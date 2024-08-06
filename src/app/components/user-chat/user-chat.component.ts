import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-chat.component.html',
  styleUrl: './user-chat.component.scss',
})
export class UserChatComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  userId: string | null = '';
  messages: any[] = [];
  sentMessage: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id');
      console.log(this.userId);
    });
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
      messageInput.value = '';
      messageForm.resetForm();
    }
  }
}
