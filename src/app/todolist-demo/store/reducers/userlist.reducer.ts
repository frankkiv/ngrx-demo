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

    case UserlistActionTypes.CHECK_ITEM:
      console.log(action.payload.data);
      const newCompleted = !action.payload.data.completed;
      const updatedDatas = [...state.datas];
      const index = updatedDatas.findIndex(x => x.id === action.payload.data.id);
      const newData = {
        ...action.payload.data,
        completed: newCompleted
      };
      updatedDatas[index] = newData;
      return {
        ...state,
        isloading: false,
        datas: updatedDatas
      };

    case UserlistActionTypes.CONTENT_UPDATE:
      return {
        ...state,
        isloading: true,
      };
    case UserlistActionTypes.CONTENT_UPDATE_SUCCESS:
      return {
        ...state,
        isloading: false,
      };
    case UserlistActionTypes.CONTENT_UPDATE_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
export const getData = (state: State) => state.datas;
