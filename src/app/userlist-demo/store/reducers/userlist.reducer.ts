import { UserlistActionTypes, UserlistActions } from '../actions/userlist.actions';

export interface DataState {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface State {
  datas: DataState[];
  isloading: boolean;
  error: string;
}

export const initialState: State = {
  datas: [],
  isloading: false,
  error: null
};

export function reducer(state = initialState, action: UserlistActions): State {
  console.log(action.type);
  switch (action.type) {
    case UserlistActionTypes.LOAD_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case UserlistActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        isloading: false,
        datas: action.payload.items,
      };
    case UserlistActionTypes.LOAD_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
