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
    this.endcheck = global.setInterval(this.fetchData.bind(this), 1000);
  }

  fetchData() {
    const data = ({
      group_id: this.state.group.id,
      id: this.state.currentUser.id,
    });
    this.props.fetchGroup(data);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.group.results_ready)
      if (!nextProps.group.results_ready) {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.setState({
          group: nextProps.group,
          currentUser: nextProps.currentUser,
          users: nextProps.users,
          result: nextProps.result,
          dataSource: ds.cloneWithRows(nextProps.users),
        });

      }
    if (nextProps.group.results_ready) {
      console.log("ready!")
      this.props.fetchResult(this.state.group.id);
      this.fetchData();
      setTimeout(() => Actions.end({type: "reset"}), 500);
    }
  }

  componentWillUnmount() {
    global.clearInterval(this.endcheck);
  }


  renderRow(user) {
    return (
      <View style={styles.rowStyle}>
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
            source={require('./greenlight2.png')}
          />
        </View>
      );
    } else {
      return (
        <View style={{paddingLeft: 20}}>
          <Image
            style={{width: 20, height: 20}}
            source={require('./nolight2.png')}
          />
        </View>
      );
    }
  }

  renderbutton() {
    const { group, currentUser } = this.state;

    if (group.creator === currentUser.id) {
      return(
        <CardSection >
          <Button onPress={() => {this.submit();}}>
            Get Results
          </Button>
        </CardSection>
      );
    }
  }

  submit() {
    this.props.fetchResult(this.state.group.id);
    this.fetchData();
    setTimeout(() => Actions.end({type: "reset"}), 1000);
  }

  render() {
    const code = "Group Code: " + this.state.group.group_code;
    return (
      <View>
        <Header headerText={code}></Header>
        <ListView
          style={styles.listStyle}
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
    paddingLeft: 20,
    color: 'white',
  },
  rowStyle: {
    marginLeft: 50,
    marginRight: 50,
    padding: 3,
    // backgroundColor: 'rgba(245, 245, 245, 0.2)',
  },
  listStyle: {
    paddingTop: 40,
    paddingBottom: 35,
    // borderBottomWidth: 0.75,
    // borderColor: 'white',
  },
};

export default WaitRoom;
