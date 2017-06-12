import * as APIUtil from '../util/resto_api_util';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RECEIVE_RESTOS = 'RECEIVE_RESTOS';
export const RECEIVE_ORDER = 'RECEIVE_ORDER';
import { Actions } from 'react-native-router-flux';

export const createRestos = restaurants => dispatch => (
   APIUtil.populateRestos(restaurants)
);

export const receiveLocation = data => ({
  type: RECEIVE_LOCATION,
  data
});

export const receiveRestos = data => ({
  type: RECEIVE_RESTOS,
  data
});

export const receiveOrder = data => ({
  type: RECEIVE_ORDER,
  data
});


export const createRankings = rankings => dispatch => (
  APIUtil.populateRankings(rankings)
  .then(() => console.log(rankings))
  .then(Actions.room({type: "reset"}))
);
