import { TodolistActionTypes, TodolistActions } from '../actions/todolist.actions';

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

export function reducer(state = initialState, action: TodolistActions): State {
  console.log(action.type);
  switch (action.type) {
    case TodolistActionTypes.LOAD_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case TodolistActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        isloading: false,
        datas: action.payload.items,
      };
    case TodolistActionTypes.LOAD_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload.error,
      };

    case TodolistActionTypes.CHECK_ITEM:
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

    case TodolistActionTypes.CONTENT_UPDATE:
      return {
        ...state,
        isloading: true,
      };
    case TodolistActionTypes.CONTENT_UPDATE_SUCCESS:
      return {
        ...state,
        isloading: false,
      };
    case TodolistActionTypes.CONTENT_UPDATE_FAILURE:
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
