import { connect } from 'react-redux';
import { fetchGroup } from '../../actions/group_actions';
import { fetchResult } from '../../actions/result_actions';
import WaitRoom from './WaitRoom';

const mapStateToProps = (state) => {
  return ({
    group: state.group.group,
    currentUser: state.group.currentUser,
    users: state.group.users,
    result: state.group.result,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchGroup: (data) => dispatch(fetchGroup(data)),
  fetchResult: (groupId) => dispatch(fetchResult(groupId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaitRoom);
