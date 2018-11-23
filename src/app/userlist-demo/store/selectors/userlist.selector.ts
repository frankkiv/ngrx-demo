import * as fromReducer from '../../store/reducers/userlist.reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

export const getModuleState = createFeatureSelector<fromReducer.State>('userlistreducers');
export const getCountState = createSelector(getModuleState, (state: fromReducer.State) => {
    return state;
});

export const getDatas = createSelector(getCountState, fromReducer.getData);
