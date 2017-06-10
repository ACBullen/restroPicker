import { combineReducers } from 'redux';
import GroupReducer from './group_reducer';
import LocationReducer from './location_reducer';
import RestoReducer from './resto_reducer';

const RootReducer = combineReducers({
  group: GroupReducer,
  location: LocationReducer,
  restos: RestoReducer
});

export default RootReducer;
