import React, { Component } from 'react';
import { Text, View, ListView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Header, Input, Spinner } from '../common';

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
    const { group, currentUser } = this.props;

    if (group.creator === currentUser.id) {
      return(
        <CardSection>
          <Button onPress={() => {this.submit()}}>
            Get Results
          </Button>
        </CardSection>
      );
    }
  }

  submit() {
    const { group, fetchResult } = this.props;
    const groupId = group.id;

    fetchResult(groupId);
    Actions.end();
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
  },
};

export default WaitRoom;
