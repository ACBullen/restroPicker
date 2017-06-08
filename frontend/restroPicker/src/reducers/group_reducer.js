import {
  RECEIVE_GROUP,
  RECEIVE_ERRORS,
  CLEAR_ERRORS } from '../actions/group_actions';
import merge from 'lodash/merge';

const defaultGroup = Object.freeze({
  group: null,
  currentUser: null,
  users: {},
  errors: [],
  loading: false,
});

const GroupReducer = (state = defaultGroup, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_GROUP:
      return merge ({}, action.data, {loading: false});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, {errors: errors, loading: false});
    case CLEAR_ERRORS:
      return merge({}, {errors: []});
    default:
      return state;
  }
};

export default GroupReducer;
