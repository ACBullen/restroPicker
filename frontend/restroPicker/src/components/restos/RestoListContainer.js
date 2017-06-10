import { connect } from 'react-redux';

import {
    createRestos } from '../../resto_actions';
import RestoList from './RestoList';

const mapStateToProps = (state) => {
  return ({
    location: state.location,

  });
};

const mapDispatchToProps = dispatch => ({
  createRestos: ({lat, lng}) => dispatch(createRestos({lat, lng}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestoList);
