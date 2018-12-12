import {Action} from '@ngrx/store';

export const SET_SOCKET_CONECTED = '[UI] Set Socket Connected';
export const SOCKET_ROOM_JOINED = '[UI] Socket Room Joined';

export class SetSocketConnected implements Action {
  readonly type = SET_SOCKET_CONECTED;
  constructor(public payload?: boolean) {}
}

export class SocketRoomJoined implements Action {
    readonly type = SOCKET_ROOM_JOINED;
    constructor(public payload?: string) {}
}

export type All = SetSocketConnected| SocketRoomJoined;
