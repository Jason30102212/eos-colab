import {
  SET_CURRENT_CONTENT
} from '../const/actionTypes';

export const setCurrentContent = (content) => {
  return {
      type: SET_CURRENT_CONTENT,
      payload: content
  }
}
