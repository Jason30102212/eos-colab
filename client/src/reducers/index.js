import { combineReducers } from 'redux';
import scatterReducer from './scatterReducer';
import navigationReducer from './navigationReducer';

export default combineReducers({
  scatter: scatterReducer,
  navigation: navigationReducer
})
