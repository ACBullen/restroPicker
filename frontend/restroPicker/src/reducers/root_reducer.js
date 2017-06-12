import { combineReducers } from 'redux';
import GroupReducer from './group_reducer';
import LocationReducer from './location_reducer';
import RestoReducer from './resto_reducer';
import OrderReducer from './order_reducer';

const RootReducer = combineReducers({
  group: GroupReducer,
  location: LocationReducer,
  restos: RestoReducer,
  order: OrderReducer
});

export default RootReducer;
