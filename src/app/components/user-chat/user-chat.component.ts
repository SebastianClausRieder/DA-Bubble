import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-chat',
  standalone: true,
  imports: [],
  templateUrl: './user-chat.component.html',
  styleUrl: './user-chat.component.scss',
})
export class UserChatComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  userId: string | null = '';
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id');
      console.log(this.userId);
    });
  }
}
