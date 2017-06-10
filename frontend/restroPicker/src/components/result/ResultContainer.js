import { connect } from 'react-redux';
import { fetchResult } from '../../actions/result_actions';
import Result from './Result';

const mapStateToProps = (state) => {
  return ({
    group: state.group.group,
    result: state.group.result,

    //// Test
    // group: { "id": 1, "group_code": "6801d7", "results_ready": false, "creator": 1 },
    //// Test

  });
};

const mapDispatchToProps = dispatch => ({
  fetchResult: (groupId) => dispatch(fetchResult(groupId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
