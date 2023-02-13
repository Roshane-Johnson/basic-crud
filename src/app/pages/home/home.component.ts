import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserCreateModalComponent } from 'src/app/components/user-create-modal/user-create-modal.component';
import { UserDeleteModalComponent } from 'src/app/components/user-delete-modal/user-delete-modal.component';
import { UserEditModalComponent } from 'src/app/components/user-edit-modal/user-edit-modal.component';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public users: User[] = [];

  constructor(private userService: UserService, private dialog: MatDialog) {
    this.userService.getAll().subscribe({
      next: (resp: ApiResponse<User[]>) => {
        this.users = resp.data;
      },
    });
  }

  openCreateModal(): void {
    this.dialog.open(UserCreateModalComponent);
  }

  openEditModal(id: string | undefined): void {
    this.dialog.open(UserEditModalComponent, { data: id });
  }

  openDeleteModal(id: string | undefined): void {
    this.dialog.open(UserDeleteModalComponent, { data: id });
  }

  ngOnInit(): void {}
}
