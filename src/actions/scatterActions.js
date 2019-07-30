import {
  SET_SCATTER_LOGIN,
  SET_SCATTER_LOGOUT
 } from '../const/actionTypes';

export const scatterLogin = () => {
  return {
    type: SET_SCATTER_LOGIN,
    payload: true
  }
}

export const scatterLogout = () => {
  return {
    type: SET_SCATTER_LOGOUT,
    payload: false
  }
}
