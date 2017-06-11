import React, { Component } from 'react';
import { Text, View, ListView, Image } from 'react-native';
import { Button, Card, CardSection, Header, Input, Spinner } from '../common';

class Result extends Component {

  render () {
    const code = "Group Code: " + this.props.group.group_code;
    return (
      <View>
        <Header headerText={code}></Header>
        <Card>
          <Text style={styles.resultTextStyle}>
            {this.props.result[0]}
          </Text>
        </Card>
        <Card>
          <Text style={styles.resultTextStyle}>
            {this.props.result[1]}
          </Text>
        </Card>
        <Card>
          <Text style={styles.resultTextStyle}>
            {this.props.result[2]}
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
    color: 'white',
    fontWeight: '800',
  }
};

export default Result;
