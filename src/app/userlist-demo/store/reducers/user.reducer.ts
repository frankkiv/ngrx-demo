import { UserActionTypes, UserActions } from '../actions/user.action';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface UserState {
  id: number;
  name: string;
  onlinestatus: boolean;
  onduration: Date;
  offduration: Date;
  desc: string;
  country: string;
  ip: string;
}

export interface State extends EntityState<UserState> {
  isloading: boolean;
  error: string;
}

export const adapter: EntityAdapter<UserState> = createEntityAdapter<UserState>({
  // set unique id
  selectId: (userState: UserState) => userState.name,
});
export const initialState: State = adapter.getInitialState({
  isloading: false,
  error: null
});

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.LOAD_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case UserActionTypes.LOAD_SUCCESS:
      return adapter.addAll(action.payload.items, { ...state, error: '' });
    case UserActionTypes.LOAD_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload.error
      };
    case UserActionTypes.UPDATE_USER:
      return state;
    case UserActionTypes.USER_UPDATED:
      // console.log(action.payload);
      return adapter.updateOne( {id: action.payload.name , changes: action.payload }, state);
    case UserActionTypes.USER_ADDED:
      console.log(action.payload);
      return adapter.addOne(action.payload , state);
    default:
      return state;
  }
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of Todo ids
export const selectUserIds = selectIds;
export const selectUserEntities = selectEntities;
export const selectUserArray = selectAll;
export const selectUserTotal = selectTotal;
