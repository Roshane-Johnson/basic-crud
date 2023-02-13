import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobPosition } from 'src/app/enums/job-position';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss'],
})
export class UserEditModalComponent implements OnInit {
  jobPositions = Object.keys(JobPosition);
  updateForm: User = <User>{};

  constructor(
    @Inject(MAT_DIALOG_DATA) public id: string,
    private userService: UserService,
    private snackbar: MatSnackBar
  ) {
    this.userService.getOne(this.id).subscribe({
      next: (resp: ApiResponse<User>) => {
        this.updateForm = resp.data;
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error getting user before editing', error);
      },
    });
  }

  onEditUser(): void {
    this.userService.updateOne(this.id, this.updateForm).subscribe({
      next: (resp: ApiResponse<User>) => {
        if (resp.success === true) {
          // response successful
          this.snackbar.open('User Updated!', undefined, { duration: 2500 });
        } else {
          // response failed
          console.log(resp.data);
        }
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error updating user', error);
      },
    });
  }

  ngOnInit(): void {}
}
