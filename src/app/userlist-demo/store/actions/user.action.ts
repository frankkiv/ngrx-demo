import { Action } from '@ngrx/store';
import { UserState } from './../reducers/user.reducer';

export enum UserActionTypes {
  LOAD_REQUEST = '[LOAD] Load Request',
  LOAD_FAILURE = '[LOAD] Load Failure',
  LOAD_SUCCESS = '[LOAD] Load Success',

  UPDATE_USER   = '[Users] Update', // same for the rest ...
  USER_UPDATED  = '[Users] Updated',
  USER_ADDED  = '[Users] Added',
}

export class LoadRequestAction implements Action {
  readonly type = UserActionTypes.LOAD_REQUEST;
}
export class LoadFailureAction implements Action {
  readonly type = UserActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}
export class LoadSuccessAction implements Action {
  readonly type = UserActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: [UserState] }) {}
}


export class UpdateUser implements Action {
  readonly type = UserActionTypes.UPDATE_USER;
  constructor(public payload?: UserState) {}
}
export class UserUpdated implements Action {
  readonly type = UserActionTypes.USER_UPDATED;
  constructor(public payload?: UserState) {}
}
export class UserAdded implements Action {
  readonly type = UserActionTypes.USER_ADDED;
  constructor(public payload?: UserState) {}
}

export type UserActions = LoadRequestAction| LoadFailureAction| LoadSuccessAction|
UpdateUser| UserUpdated| UserAdded;
