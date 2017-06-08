import * as APIUtil from '../util/group_api_util';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const createGroup = (user) => dispatch => (
  APIUtil.createGroup(user)
  .then(data => dispatch(receiveGroup(data)))
);

export const joinGroup = (user) => dispatch => (
  APIUtil.joinGroup(user)
    .then(
      data => { dispatch(receiveGroup(data)); dispatch(clearErrors()); },
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

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
