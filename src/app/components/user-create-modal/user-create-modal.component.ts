import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobPosition } from 'src/app/enums/job-position';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create-modal',
  templateUrl: './user-create-modal.component.html',
  styleUrls: ['./user-create-modal.component.scss'],
})
export class UserCreateModalComponent implements OnInit {
  jobPositions = Object.keys(JobPosition);
  createForm: User = <User>{};

  constructor(
    private userService: UserService,
    private snackbar: MatSnackBar
  ) {}

  onCreateUser(): void {
    this.userService.create(this.createForm).subscribe({
      next: (resp: ApiResponse<User>) => {
        if (resp.success === true) {
          // response successful
          this.snackbar.open('User Created!', undefined, { duration: 2500 });
        } else {
          // response failed
          console.log(resp.data);
        }
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error creating user', error);
      },
    });
  }

  ngOnInit(): void {}
}
