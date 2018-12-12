import * as fromReducer from './../reducers/user.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getModuleState = createFeatureSelector<fromReducer.State>('reducer');
export const getState = createSelector(getModuleState, (state: fromReducer.State) => {
    return state;
});

export const getDatasArray = createSelector(getState, fromReducer.selectUserArray);
export const getUserTotals = createSelector(getState, fromReducer.selectUserTotal);

export const getPreviewData = createSelector(getDatasArray, datas => (props) => {
    return props === '' ? datas : datas.filter(item => item.name.toLowerCase().indexOf(props) !== -1 || !props);
});

export const getPreviewStatus = createSelector(getDatasArray, datas => (props) => {
    const total = props === '' ? datas.length : datas.filter(item => item.name.toLowerCase().indexOf(props) !== -1 || !props).length;
    const online = props === '' ? datas.filter(item => item.onlinestatus === true).length :
     datas.filter(item => item.name.toLowerCase().indexOf(props) !== -1 || !props).filter(item => item.onlinestatus === true).length;
    return {total: total, online: online};
});

