import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
import { TodolistActionTypes, TodolistActions } from '../actions/todolist.actions';

export interface DataState {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface State extends EntityState<DataState> {
  isloading: boolean;
  error: string;
}
export const adapter: EntityAdapter<DataState> = createEntityAdapter<DataState>({});
export const initialState: State = adapter.getInitialState({
  isloading: false,
  error: null
});

// export interface State {
//   datas: DataState[];
//   isloading: boolean;
//   error: string;
// }

// export const initialState: State = {
//   datas: [],
//   isloading: false,
//   error: null
// };

export function reducer(state = initialState, action: TodolistActions): State {
  console.log(action.type);
  switch (action.type) {
    case TodolistActionTypes.LOAD_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case TodolistActionTypes.LOAD_SUCCESS:
      // return {
      //   ...state,
      //   isloading: false,
      //   datas: action.payload.items,
      // };
      return adapter.addAll(action.payload.items, { ...state, error: '' });
    case TodolistActionTypes.LOAD_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload.error,
      };
    case TodolistActionTypes.CHECK_ITEM:
      // console.log(action.payload.data);
      // const newCompleted = !action.payload.data.completed;
      // const updatedDatas = [...state.datas];
      // const index = updatedDatas.findIndex(x => x.id === action.payload.data.id);
      // const newData = {
      //   ...action.payload.data,
      //   completed: newCompleted
      // };
      // updatedDatas[index] = newData;
      // return {
      //   ...state,
      //   isloading: false,
      //   datas: updatedDatas
      // };
      const newCompleted = !action.payload.data.completed;
      return adapter.updateOne( {id: action.payload.data.id , changes: {completed: newCompleted} }, state);
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
// export const getData = (state: State) => state.datas;
// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of Todo ids
export const selectTodoIds = selectIds;
// select the dictionary of user entities
export const selectTodosEntities = selectEntities;
// select the array of users
export const selectAllTodos = selectAll;
// select the total user count
export const selectTodoTotal = selectTotal;
