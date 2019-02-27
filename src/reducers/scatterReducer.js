import {
  SET_SCATTER_LOGIN,
  SET_SCATTER_LOGOUT
} from '../const/actionTypes';

const initialState = {
  isScatterActivated: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SCATTER_LOGIN:
      return{
        ...state,
        isScatterActivated: action.payload
      }
    case SET_SCATTER_LOGOUT:
      return{
        ...state,
        isScatterActivated: action.payload
      }
    default:
      return state;
  }
}
