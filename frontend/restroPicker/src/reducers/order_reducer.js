import {
  RECEIVE_ORDER } from '../actions/resto_actions';
import merge from 'lodash/merge';

const OrderReducer = (state = {}, action) => {
  Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ORDER:
        return merge({}, action.data);

      default:
        return state;
    }

  };

  export default OrderReducer;
