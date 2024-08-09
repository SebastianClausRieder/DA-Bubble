import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChannelService } from '../../services/channel.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-channel-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './channel-chat.component.html',
  styleUrl: './channel-chat.component.scss',
})
export class ChannelChatComponent implements OnInit {
  channelId: string = '';
  messages: any[] = [];
  sentMessage: any;
  constructor(
    private route: ActivatedRoute,
    public channelService: ChannelService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      if (id) {
        this.channelId = id;
        this.channelService.getCurrentChannel(this.channelId);
      } else {
        this.channelId = '';
      }
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
      this.channelService.sendMessage(this.sentMessage);
      messageInput.value = '';
      messageForm.resetForm();
    }
  }
}
