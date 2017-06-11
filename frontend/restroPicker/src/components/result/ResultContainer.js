import { connect } from 'react-redux';
import { fetchResult } from '../../actions/result_actions';
import Result from './Result';

const mapStateToProps = (state) => {
  return ({
    group: state.group.group,
    result: state.group.result,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchResult: (groupId) => dispatch(fetchResult(groupId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
