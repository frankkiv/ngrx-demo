import { Action } from '@ngrx/store';

export enum NumActionType {
  add = 'ADD',
  subtract = 'SUB',
}

export class ADD implements Action {
  readonly type = NumActionType.add;
  constructor(public payload: { data: Number }) { }
}
export class SUB implements Action {
  readonly type = NumActionType.subtract;
  constructor(public payload: { data: Number }) { }
}
export type NumAction = ADD | SUB;
