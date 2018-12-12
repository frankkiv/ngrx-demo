import * as uiActions from './../actions/ui.action';

export interface State {
  socketConnected: boolean;
  room: string;
}

export const INIT_STATE: State = {
  socketConnected: false,
  room: null
};


export function reducer(state = INIT_STATE, action: uiActions.All): State {

  switch (action.type) {
    case uiActions.SET_SOCKET_CONECTED : {
      return {
        ...state,
        socketConnected: action.payload
      };
    }
    case uiActions.SOCKET_ROOM_JOINED : {
        return {
            ...state,
            room: action.payload
        };
    }
    default : return state;
  }

}

export const getSocketStatus = (state: State): boolean => state.socketConnected;
export const getSocketRoomStatus = (state: State): string => state.room;
