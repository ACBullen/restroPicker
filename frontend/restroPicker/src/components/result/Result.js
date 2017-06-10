import React, { Component } from 'react';
import { Text, View, ListView, Image } from 'react-native';
import { Button, Card, CardSection, Header, Input, Spinner } from '../common';

class Result extends Component {
  componentWillMount(){
    const { group, fetchResult } = this.props;
    const groupId = group.id;

    fetchResult(groupId);
  }
  render () {
    const code = "Group Code: " + this.props.group.group_code;
    return (
      <View>
        <Header headerText={code}></Header>
        <Card>
          <Text style={styles.resultTextStyle}>
            {this.props.result}
          </Text>
        </Card>
      </View>
    );
  }
}

const styles = {
  resultTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default Result;
