import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, Image } from 'react-native';
import { Button, Card, CardSection, Header, Input, Spinner } from '../common';
import { receiveResult } from '../../actions/result_actions';

class WaitRoom extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.users);
  }

  renderRow(user) {
    return (
      <View>
        <CardSection>
          {this.renderStatus(user)}
          <Text style={styles.nameStyle}>
            {user.username}
          </Text>
        </CardSection>
      </View>
    );
  }

  renderStatus(user) {
    if (user.ranking_ready) {
      return (
        <View style={{paddingLeft: 20}}>
          <Image
            style={{width: 20, height: 20}}
            source={require('./greenlight.png')}
          />
        </View>
      );
    } else {
      return (
        <View style={{paddingLeft: 20}}>
          <Image
            style={{width: 20, height: 20}}
            source={require('./nolight.png')}
          />
        </View>
      );
    }
  }

  renderbutton() {
    if (this.props.group.creator === this.props.currentUser.id) {
      return(
        <CardSection>
          <Button onPress={() => {this.props.receiveResult()}}>
            Get Results
          </Button>
        </CardSection>
      );
    }
  }

  render() {
    const code = "Group Code: " + this.props.group.group_code;
    return (
      <View>
        <Header headerText={code}></Header>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
        {this.renderbutton()}
      </View>
    );
  }
}

const styles = {
  nameStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

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


const mapStateToProps = (state) => {
  return ({
    // group: state.group.group,
    // currentUser: state.group.currentUser,
    // users: state.group.users,

    users: usersData,
    currentUser: {"id": 7},
    group: {"group_code": "6801d7", "creator": 1},
  });
};

const mapDispatchToProps = dispatch => ({
  receiveResult: () => dispatch(receiveResult()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WaitRoom);
