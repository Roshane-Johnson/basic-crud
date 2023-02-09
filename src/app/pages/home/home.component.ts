import { Component, OnInit, inject } from '@angular/core';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private userService = inject(UserService);
  users: User[] = [];
  constructor() {
    this.userService.getAll().subscribe({
      next: (resp: ApiResponse<User[]>) => {
        this.users = resp.data;
      },
    });
  }

  ngOnInit(): void {}
}
