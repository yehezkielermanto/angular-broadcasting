import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url = `${environment.PUSHER_SCHEME}://${environment.PUSHER_HOST}:8000`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  login(data: User): Observable<User> {
    return this.http
      .post<User>(
        this.url + '/api/login',
        JSON.stringify(data),
        this.httpOptions
      )
  }
}
