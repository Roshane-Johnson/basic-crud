import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/user';
import { take, Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = environment.apiUrl + '/users/';

  constructor(private http: HttpClient) {}

  create(user: User): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(this.url, user).pipe(take(1));
  }

  getAll(): Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(this.url).pipe(take(1));
  }

  getOne(id: string): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(this.url + id).pipe(take(1));
  }

  updateOne(id: string, update: any): Observable<ApiResponse<User>> {
    return this.http
      .patch<ApiResponse<User>>(this.url + id, update)
      .pipe(take(1));
  }

  deleteOne(id: string): Observable<ApiResponse<User>> {
    return this.http.delete<ApiResponse<User>>(this.url + id).pipe(take(1));
  }
}
