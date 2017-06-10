import {
  RECEIVE_RESTOS,
} from '../actions/resto_actions';
import merge from 'lodash/merge';

const RestoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTOS:
      return merge({}, action.data);
    
    default:
      return state;
  }
};

export default RestoReducer;
