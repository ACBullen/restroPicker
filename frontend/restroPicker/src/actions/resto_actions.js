import * as APIUtil from '../util/group_api_util';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

export const receiveLocation = data => ({
  type: RECEIVE_LOCATION,
  data
});
