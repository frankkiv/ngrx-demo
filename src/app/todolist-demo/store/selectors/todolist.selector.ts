import * as fromReducer from '../../store/reducers/todolist.reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

export const getModuleState = createFeatureSelector<fromReducer.State>('userlistreducers');
export const getCountState = createSelector(getModuleState, (state: fromReducer.State) => {
    return state;
});

export const getDatas = createSelector(getCountState, fromReducer.getData);

// get user data by query userId, if All return all.
export const getUserDatas = createSelector(getDatas, datas => (props) => {
    return props === 'All' ? datas : datas.filter(item => item.userId === props);
});

// get all the users in todo list
export const getUsers = createSelector(getDatas, datas => {
    const usersObj = {};
    datas.forEach(item => {
        if (!usersObj[item.userId]) {
            usersObj[item.userId] = { userId: item.userId};
        }
    });

    return Object.values(usersObj);
});

// return total analytics
export const getAnalytics = createSelector(getDatas, (datas) => {
    const items = datas.length;
    const completedItems = datas.filter(item => item.completed === true ).length;

    return {
        total: items,
        completed: completedItems,
    };
});

// return user analytics sort by completed percentage
export const getUserAnalytics = createSelector(getDatas, (datas) => {
    const userObject = {};
    const userStatic = {
        userId: null,
        total: 0,
        completed: 0,
    };
    datas.forEach(item => {
        if (!userObject[item.userId]) {
            userObject[item.userId] = {...userStatic, userId: item.userId};
        }
        if (userObject[item.userId] && item.completed === true) {
            userObject[item.userId].total++;
            userObject[item.userId].completed++;
        } else if (userObject[item.userId] && item.completed === false) {
            userObject[item.userId].total++;
        }
    });
    const result: {
        userId: null,
        total: 0,
        completed: 0,
    }[] = (Object.values(userObject));

    result.sort(function(a, b) {
        return (b.completed / b.total) - (a.completed / a.total);
    });
    return result;
});
