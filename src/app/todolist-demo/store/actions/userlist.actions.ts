import { Action } from '@ngrx/store';
import { DataState } from './../reducers/userlist.reducer';

export enum UserlistActionTypes {
  LOAD_REQUEST = '[LOAD] Load Request',
  LOAD_FAILURE = '[LOAD] Load Failure',
  LOAD_SUCCESS = '[LOAD] Load Success',

  CHECK_ITEM = '[Check] Item',
  CONTENT_UPDATE = '[Content] Update',
  CONTENT_UPDATE_SUCCESS = '[Content] Update Success',
  CONTENT_UPDATE_FAILURE = '[Content] Update Failure',
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
export class ItemCheckAction implements Action {
  readonly type = UserlistActionTypes.CHECK_ITEM;
  constructor(public payload: { data: DataState }) {}
}
export class ContentUpdateAction implements Action {
  readonly type = UserlistActionTypes.CONTENT_UPDATE;
  constructor(public payload: { data: string }) {}
}
export class ContentUpdateSuccessAction implements Action {
  readonly type = UserlistActionTypes.CONTENT_UPDATE_SUCCESS;
  constructor(public payload: { data: string }) {}
}
export class ContentUpdateFailureAction implements Action {
  readonly type = UserlistActionTypes.CONTENT_UPDATE_FAILURE;
  constructor(public payload: { error: string }) {}
}

export type UserlistActions = LoadRequestAction| LoadFailureAction| LoadSuccessAction | ItemCheckAction|
ContentUpdateAction| ContentUpdateSuccessAction| ContentUpdateFailureAction;
