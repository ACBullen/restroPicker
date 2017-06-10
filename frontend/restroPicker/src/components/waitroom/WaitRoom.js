import React, { Component } from 'react';
import { Text, View, ListView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Header, Input, Spinner } from '../common';

class WaitRoom extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      group: this.props.group,
      currentUser: this.props.currentUser,
      users: this.props.users,
      result: this.props.result,
      dataSource: ds.cloneWithRows(this.props.users),
    };

    this.fetchData();
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    // this.dataSource = ds.cloneWithRows(this.state.users);
    this.setState({ dataSource : ds.cloneWithRows(this.props.users)});
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.group.results_ready) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.setState({
        group: nextProps.group,
        currentUser: nextProps.currentUser,
        users: nextProps.users,
        result: nextProps.result,
        datasource: ds.cloneWithRows(nextProps.users),
      });
      setTimeout(this.fetchData.bind(this), 1000);
    }
    if (nextProps.group.results_ready) {
      Actions.end();
    }
  }

  fetchData() {
    this.props.fetchGroup({
      group_id : this.state.group.id,
      id : this.state.currentUser.id,
    });
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
    const { group, currentUser } = this.state;

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
    Actions.end();
  }

  render() {
    const code = "Group Code: " + this.state.group.group_code;
    return (
      <View>
        <Header headerText={code}></Header>
        <ListView
          dataSource={this.state.dataSource}
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
