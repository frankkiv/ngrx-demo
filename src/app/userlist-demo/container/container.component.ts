import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.services';
import { Store, select } from '@ngrx/store';
import { SocketService } from '../services/socket.services';
import { map } from 'rxjs/operators';
import * as uiActions from './../store/actions/ui.action';
import * as uiSelectors from './../store/selectors/ui.selector';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private socket: SocketService, private store: Store<any>) { }
  socketStatus$;
  roomStatus$;

  ngOnInit() {
    this.socketStatus$ = this.store.pipe(
      select(uiSelectors.getSocketStatus),
      map(connected => connected ? 'connected' : 'disconnected')
    );
    this.roomStatus$ = this.store.pipe(
      select(uiSelectors.getSocketRoomStatus)
    );

    this.socket.connected$.pipe(map(connected => new uiActions.SetSocketConnected(connected)))
        .subscribe(this.store);

    this.socket.room$.pipe(map(room => new uiActions.SocketRoomJoined(room)))
        .subscribe(this.store);
  }

}
