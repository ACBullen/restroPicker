import * as APIUtil from '../util/result_api_util';
export const RECEIVE_RESULT = 'RECEIVE_RESULT';

export const fetchResult = (groupId) => dispatch => (
  APIUtil.fetchResult(groupId)
    .then(result => dispatch(receiveResult(result)))
);

export const receiveResult = result => ({
  type: RECEIVE_RESULT,
  result
});
