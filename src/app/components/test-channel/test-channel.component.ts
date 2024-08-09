import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../../services/channel.service';

@Component({
  selector: 'app-test-channel',
  standalone: true,
  imports: [],
  templateUrl: './test-channel.component.html',
  styleUrl: './test-channel.component.scss',
})
export class TestChannelComponent implements OnInit {
  constructor(public channelService: ChannelService) {}
  ngOnInit(): void {
    this.channelService.getAllChannels();
  }
  createChannel() {
    const createChannel = document.getElementById('create-channel');
    if (createChannel) {
      createChannel.classList.remove('hidden');
    }
  }
}
