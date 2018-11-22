import { Action } from '@ngrx/store';
import { NumActionType } from '../action/num.actions';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0
}

export function numReducer(state = initialState, action: Action): CounterState {
  switch (action.type) {
    case NumActionType.add:
    console.log(state);
      state.count++
      return state;
    case NumActionType.subtract:
      state.count--;
      return state;
    default:
      return state;
  }
}

export const getCount = (state: CounterState) => {
  debugger
  return state.count;
}

