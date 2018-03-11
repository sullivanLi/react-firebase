import { combineReducers } from 'redux';
import userReducer from './user';
import messageReducer from './message';

const rootReducer = combineReducers({
  userState: userReducer,
  messageState: messageReducer,
});

export default rootReducer;
