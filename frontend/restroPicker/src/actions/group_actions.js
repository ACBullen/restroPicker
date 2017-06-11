import * as APIUtil from '../util/group_api_util';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const CLEAR_GROUP = 'CLEAR_GROUP';

export const fetchGroup = (data) => dispatch => (
  APIUtil.fetchGroup(data)
    .then(group => dispatch(receiveGroup(group)))
);

export const createGroup = (user) => dispatch => (
  APIUtil.createGroup(user)
    .then(data => dispatch(receiveGroup(data)))
);

export const joinGroup = (user) => dispatch => (
  APIUtil.joinGroup(user)
    .then( data => {
      if (data instanceof Array) {
        dispatch(receiveErrors(data));
      } else {
        dispatch(receiveGroup(data));
      }
    })
);

export const clearGroup = () => ({
  type: CLEAR_GROUP
});

export const receiveGroup = data => ({
  type: RECEIVE_GROUP,
  data
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
