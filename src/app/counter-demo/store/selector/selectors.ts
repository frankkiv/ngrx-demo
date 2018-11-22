import * as fromNum from '../../store/reducer/num.reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

export interface SelectState {
    counter: fromNum.CounterState;
}

export const reducers: ActionReducerMap<SelectState> = {
    counter: fromNum.numReducer,
};

export const getModuleState = createFeatureSelector<SelectState>('reducer');
export const getCountState = createSelector(getModuleState, (state: SelectState) => {
    return state.counter;
});

/*export const getCountState = (state: SelectState) => {
    debugger
    return state.counter;
}*/
export const getCount = createSelector(getCountState, fromNum.getCount);
export const getPrecount = createSelector(getCountState, fromNum.getPrecount);
