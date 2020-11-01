import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loginReducer from './loginReducer';
import chatRoomReducer from './chatRoomReducer';


const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  loginReducer,
  chatRoomReducer
});

export default createRootReducer;