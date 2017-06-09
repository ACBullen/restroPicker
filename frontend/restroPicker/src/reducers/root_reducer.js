import { combineReducers } from 'redux';
import GroupReducer from './group_reducer';
import LocationReducer from './location_reducer';

const RootReducer = combineReducers({
  group: GroupReducer,
  location: LocationReducer
});

export default RootReducer;
