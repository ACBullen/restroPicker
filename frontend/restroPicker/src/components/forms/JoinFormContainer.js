import { connect } from 'react-redux';

import {
  createGroup,
  joinGroup,
  clearErrors } from '../../actions/group_actions';
import JoinForm from './JoinForm';

const mapStateToProps = (state) => {
  return ({
    group: state.group.group,
    currentUser: state.group.currentUser,
    users: state.group.users,
    errors: state.group.errors,
    loading: state.group.loading,
  });
};

const mapDispatchToProps = dispatch => ({
  joinGroup: user => dispatch(joinGroup(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinForm);
