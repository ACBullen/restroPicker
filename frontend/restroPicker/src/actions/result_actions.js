import * as APIUtil from '../util/result_api_util';
export const RECEIVE_RESULT = 'RECEIVE_RESULT';

export const fetchResult = (groupId) => dispatch => (
  APIUtil.fetchResult(groupId)
    .then(data => dispatch(receiveResult(data)))
);

export const receiveResult = data => ({
  type: RECEIVE_RESULT,
  data
});
