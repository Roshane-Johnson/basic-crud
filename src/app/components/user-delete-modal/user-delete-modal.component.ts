import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-delete-modal',
  templateUrl: './user-delete-modal.component.html',
  styleUrls: ['./user-delete-modal.component.scss'],
})
export class UserDeleteModalComponent {
  user: User = <User>{};

  constructor(
    @Inject(MAT_DIALOG_DATA) public id: string,
    private userService: UserService,
    private snackbar: MatSnackBar
  ) {
    this.userService.getOne(this.id).subscribe({
      next: (resp: ApiResponse<User>) => {
        this.user = resp.data;
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error getting user before editing', error);
      },
    });
  }

  onDeleteUser(): void {
    this.userService.deleteOne(this.id).subscribe({
      next: (resp: ApiResponse<User>) => {
        if (resp.success === true) {
          // response successful
          this.snackbar.open('User Deleted!', undefined, { duration: 2500 });
        } else {
          // response failed
          console.log(resp.data);
        }
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error deleting user', error);
      },
    });
  }
}
