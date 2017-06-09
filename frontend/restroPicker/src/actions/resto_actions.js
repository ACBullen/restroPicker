import * as APIUtil from '../util/resto_api_util';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RECEIVE_RESTOS = 'RECEIVE_RESTOS';

export const createRestos = ({lat, lng}) => dispatch => (
  APIUtil.fetchYelpRestos({lat, lng})
  .then(data => dispatch(receiveRestos(data)))
);


export const receiveLocation = data => ({
  type: RECEIVE_LOCATION,
  data
});

export const receiveRestos = data => ({
  type: RECEIVE_RESTOS,
  data
});
