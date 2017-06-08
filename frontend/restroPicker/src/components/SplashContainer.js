import { connect } from 'react-redux';

import {
  createGroup,
  joinGroup,
  clearErrors } from '../actions/group_actions';
import Splash from './Splash';

const mapStateToProps = (state) => {
  return ({
    group: state.group.group,
    currentUser: state.group.currentUser,
    users: state.group.users,
    errors: state.group.errors,
  });
};

const mapDispatchToProps = dispatch => ({
  createGroup: user => dispatch(createGroup(user)),
  joinGroup: user => dispatch(joinGroup(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
