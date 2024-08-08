import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ChannelService } from '../../services/channel.service';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-create-channel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-channel.component.html',
  styleUrl: './create-channel.component.scss',
})
export class CreateChannelComponent implements OnInit {
  newChannel: any = {
    name: '',
    description: '',
    members: [],
  };
  allUsers: any;

  constructor(
    public channelService: ChannelService,
    public userService: UserdataService
  ) {}
  ngOnInit(): void {
    this.allUsers = this.userService.allUsers;
  }

  createChannel(channelForm: NgForm) {
    if (channelForm.valid) {
      this.channelService.createNewChannel(this.newChannel);
    }
  }
}
