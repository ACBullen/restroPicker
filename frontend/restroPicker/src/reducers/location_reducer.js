import {
  RECEIVE_LOCATION } from '../actions/resto_actions';
import merge from 'lodash/merge';

const LocationReducer = (state = {}, action) => {
  Object.freeze(state);
    switch (action.type) {
      case RECEIVE_LOCATION:
        return merge({}, action.data);

      default:
        return state;
    }

  };

  export default LocationReducer;
