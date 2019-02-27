import {
  SET_CURRENT_CONTENT
} from '../const/actionTypes';

const initialState = {
  currentContent: "overview"
}

export default function( state = initialState, action ) {
  switch (action.type) {
    case SET_CURRENT_CONTENT:
      return {
        ...state,
        currentContent: action.payload
      }
    default:
      return state;
  }
}
