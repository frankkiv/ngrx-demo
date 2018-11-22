import { Action } from '@ngrx/store';

export enum NumActionType {
  add = 'ADD',
  subtract = 'SUB',
}

export class ADD implements Action {
  readonly type = NumActionType.add;
}
export class SUB implements Action {
  readonly type = NumActionType.subtract;
}
export type NumAction = ADD | SUB;
