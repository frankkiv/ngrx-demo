import * as fromNum from '../../store/reducer/num.reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

export interface selectState {
    counter: fromNum.CounterState;
}

export const reducers: ActionReducerMap<selectState> = {
    counter: fromNum.numReducer,
};

export const getModuleState = createFeatureSelector<selectState>('reducer');
export const getCountState = createSelector(getModuleState, (state: selectState) => 
{
    debugger
    return state.counter
});

/*export const getCountState = (state: selectState) => {
    debugger
    return state.counter;
}*/
export const getCount = createSelector(getCountState, fromNum.getCount);
