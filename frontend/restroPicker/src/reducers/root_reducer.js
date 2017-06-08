import { combineReducers } from 'redux';
import GroupReducer from './group_reducer';

const RootReducer = combineReducers({
  group: GroupReducer,

});

export default RootReducer;
