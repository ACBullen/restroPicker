import React, { Component } from 'react';
import { Text, View, ListView, Image, Linking, TouchableHighlight } from 'react-native';
import { Button, Card, CardSection, Header, Input, Spinner } from '../common';

class Result extends Component {

  render () {
    const { group, result, restos } = this.props;
    const code = "Group Code: " + group.group_code;
    const first = result[0];
    const second = result[1];
    const third = result[2];

    return (
      <View>
        <Header headerText={code}></Header>
        <Card>
          <Text style={styles.congratsTextStyle}>
            CONGRATULATIONS!
          </Text>
          <Text style={styles.youareTextStyle}>
            You are going to
          </Text>
        </Card>

        <Card>
          <TouchableHighlight style={styles.row} underlayColor={'#1259ba'} onPress={()=> Linking.openURL(restos[first].yelp_url)}>
            <Text style={styles.winnerTextStyle}>
              {restos[first].name}
            </Text>
          </TouchableHighlight>
        </Card>

        <Card>
          <TouchableHighlight underlayColor={'#1259ba'} onPress={()=> Linking.openURL(restos[second].yelp_url)}>
            <Text style={styles.resultTextStyle}>
              Plan B: {restos[second].name}
            </Text>
          </TouchableHighlight>
        </Card>

        <Card>
          <TouchableHighlight underlayColor={'#1259ba'} onPress={()=> Linking.openURL(restos[third].yelp_url)}>
            <Text style={styles.resultTextStyle}>
              Plan C: {restos[third].name}
            </Text>
          </TouchableHighlight>
        </Card>
      </View>
    );
  }
}

const styles = {
  congratsTextStyle: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'white',
    fontWeight: '800',
  },
  youareTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    fontWeight: '400',
  },
  winnerTextStyle: {
    fontSize: 20,
    // alignItems: 'center',
    color: 'black',
    fontWeight: '800',
  },
  resultTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    height: 80,
    flex: 1,
    marginTop: 7,
    marginBottom: 12,
    borderRadius: 4,
    width: window.width - 30 * 2,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 1,
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 2
  },
};

export default Result;
