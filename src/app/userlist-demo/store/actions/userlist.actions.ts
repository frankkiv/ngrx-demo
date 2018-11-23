import { Action } from '@ngrx/store';

export enum UserlistActionTypes {
  LOAD_REQUEST = '[Userlist] Load Request',
  LOAD_FAILURE = '[Userlist] Load Failure',
  LOAD_SUCCESS = '[Userlist] Load Success'
}

export class LoadRequestAction implements Action {
  readonly type = UserlistActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = UserlistActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = UserlistActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: [] }) {}
}

export type UserlistActions = LoadRequestAction| LoadFailureAction| LoadSuccessAction;
