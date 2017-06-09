import { connect } from 'react-redux';
import { fetchResult } from '../../actions/result_actions';
import WaitRoom from './WaitRoom';

const mapStateToProps = (state) => {
  return ({
    // group: state.group.group,
    // currentUser: state.group.currentUser,
    // users: state.group.users,
    result: state.group.result,

    //// Test
    users: usersData,
    currentUser: {"id": 7},
    group: {"group_code": "6801d7", "creator": 1},
    //// Test

  });
};

const mapDispatchToProps = dispatch => ({
  fetchResult: (groupId) => dispatch(fetchResult(groupId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaitRoom);





//// Test
const usersData = [
    {
      "id": 1,
      "group_id": 1,
      "username": "Bob",
      "ranking_ready": false
    },
    {
      "id": 2,
      "group_id": 1,
      "username": "Rob",
      "ranking_ready": true
    },
    {
      "id": 3,
      "group_id": 1,
      "username": "Tod",
      "ranking_ready": false
    },
    {
      "id": 4,
      "group_id": 1,
      "username": "Dob",
      "ranking_ready": false
    },
    {
      "id": 5,
      "group_id": 1,
      "username": "Cob",
      "ranking_ready": true
    },
    {
      "id": 6,
      "group_id": 1,
      "username": "Fob",
      "ranking_ready": true
    },
    {
      "id": 7,
      "group_id": 1,
      "username": "Gob",
      "ranking_ready": false
    }
  ];
