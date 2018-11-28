import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserListService {
  private API_BASE_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {
    return this.http
      .get(`${this.API_BASE_URL}/todos/`)
      .pipe(map(result => {
          console.log(result);
          return result;
        }));
  }

  updateContent(): Observable<any> {
    return new Observable(observer => {
        setTimeout(() => {
          return null;
        }, 1000);
      });
  }
}
