import React, { Component } from 'react';
import { Text, View, ListView, Image } from 'react-native';
import { Button, Card, CardSection, Header, Input, Spinner } from '../common';
import { connect } from 'react-redux';

class Result extends Component {
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

const mapStateToProps = (state) => {
  return ({
    // group: state.group.group,
    result: state.group.result,

    //// Test
    group: { "id": 1, "group_code": "6801d7", "results_ready": false, "creator": 1 },
    //// Test

  });
};

export default connect(mapStateToProps)(Result);
