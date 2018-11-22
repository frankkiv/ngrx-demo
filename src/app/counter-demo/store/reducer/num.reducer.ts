import { Action } from '@ngrx/store';
import { NumActionType } from '../action/num.actions';

export interface CounterState {
  count: number;
  precount: number;
}

export const initialState: CounterState = {
  count: 0,
  precount: 0
};

export function numReducer(state: CounterState = initialState, action): CounterState {
  // console.log(action.payload);
  switch (action.type) {
    case NumActionType.add:
      return {
        ...state,
        precount: state.count,
        count: state.count + action.payload.data
      };
    case NumActionType.subtract:
      return {
        ...state,
        precount: state.count,
        count: state.count - action.payload.data
      };
    default:
      return state;
  }
}

export const getCount = (state: CounterState) => state.count;
export const getPrecount = (state: CounterState) => state.precount;
