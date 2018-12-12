import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SocketService } from './socket.services';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
    usersListed$: Observable<any>;
    userAdded$: Observable<any>;
    userUpdated$: Observable<any>;
    userDeleted$: Observable<any>;

    private API_BASE_URL = 'http://127.0.0.1:4200';

    constructor(private http: HttpClient, private socket: SocketService) {
        this.socket.join('users');
        // Every socket NOTES event has it's own observable, will be used by ngrx effects
        this.usersListed$ = this.socket.listen('[Users] Listed');
        this.userAdded$ = this.socket.listen('[Users] Added');
        this.userUpdated$ = this.socket.listen('[Users] Updated');
        this.userDeleted$ = this.socket.listen('[Users] Deleted');
    }
    // These methods will be called by ngrx effects (do not use directly in the components)
    listUsers() {
        this.socket.emit('[Users] List');
    }
    addUser(user) {
        this.socket.emit('[Users] Add', user);
    }
    updateUser(user) {
        this.socket.emit('[Users] Update', user);
    }
    deleteUser(user) {
        this.socket.emit('[Users] Delete', user);
    }

    getUsers(): Observable<any> {
        // console.log(`${this.API_BASE_URL}/api/userlist`);
        return this.http
        .get(`${this.API_BASE_URL}/api/userlist`)
        .pipe(map(result => {
            // console.log(result);
            return result;
        }));
    }
}
