import { connect } from 'react-redux';

import {
  createGroup,
  joinGroup,
  clearErrors } from '../../actions/group_actions';
import { receiveRestos } from '../../actions/resto_actions';
import NewForm from './NewForm';

const mapStateToProps = (state) => {
  return ({
    group: state.group.group,
    currentUser: state.group.currentUser,
    users: state.group.users,
    errors: state.group.errors,
    loading: state.group.loading,
    location: state.location,
    restos: state.restos
  });
};

const mapDispatchToProps = dispatch => ({
  createGroup: user => dispatch(createGroup(user)),
  clearErrors: () => dispatch(clearErrors()),
  receiveRestos: data => dispatch(receiveRestos(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewForm);
