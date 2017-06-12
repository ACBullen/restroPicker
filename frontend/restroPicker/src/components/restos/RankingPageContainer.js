import { connect } from 'react-redux';
import {
    createRankings } from '../../actions/resto_actions';
import RankingPage from './RankingPage';

const mapStateToProps = (state) => {
  return ({
    user_id: state.group.currentUser.id,
    restos: state.restos,
    order: state.order
  });
};

const mapDispatchToProps = dispatch => ({
  createRankings: rankings => dispatch(createRankings(rankings)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingPage);
