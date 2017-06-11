import { connect } from 'react-redux';

import {
    receiveRestos,
    createRankings} from '../../actions/resto_actions';
import RestoList from './RestoList';

const mapStateToProps = (state) => {
  return ({
    group: state.group.group,

  });
};

const mapDispatchToProps = dispatch => ({
  createRankings: rankings => dispatch(createRankings(rankings)),
  receiveRestos: data => dispatch(receiveRestos(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestoList);
