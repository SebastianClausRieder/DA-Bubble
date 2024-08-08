import { Component } from '@angular/core';

@Component({
  selector: 'app-test-channel',
  standalone: true,
  imports: [],
  templateUrl: './test-channel.component.html',
  styleUrl: './test-channel.component.scss',
})
export class TestChannelComponent {
  createChannel() {
    throw new Error('Method not implemented.');
  }
}
