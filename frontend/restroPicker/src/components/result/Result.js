import React, { Component } from 'react';
import { Text, View, ListView, Image, Linking, TouchableHighlight } from 'react-native';
import { Button, Card, CardSection, Header, Input, Spinner } from '../common';

const stars = {
  3: '../restos/stars/small_3.png',
  3.5: '../restos/stars/small_3_half.png',
  4: '../restos/stars/small_4.png',
  4.5: '../restos/stars/small_4_half.png',
  5: '../restos/stars/small_5.png'
};

class Result extends Component {

  renderCategories(text) {
    if (text.length > 30) {
      return (text.slice(0,27) + "...");
    } else {
      return (text);
    }
  }

  renderStars(num) {
    switch (num) {
      case 3:
        return (<Image source={require(`../restos/stars/small_3.png`)} style={{width: 70, height: 12}}/>);
      case 3.5:
        return (<Image source={require(`../restos/stars/small_3_half.png`)} style={{width: 70, height: 12}}/>);
      case 4:
        return (<Image source={require(`../restos/stars/small_4.png`)} style={{width: 70, height: 12}}/>);
      case 4.5:
        return (<Image source={require(`../restos/stars/small_4_half.png`)} style={{width: 70, height: 12}}/>);
      default:
        return (<Image source={require(`../restos/stars/small_5.png`)} style={{width: 70, height: 12}}/>);
    }
  }

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
          <Text style={{color: 'white', marginBottom: 10, alignSelf: 'center'}}>Powered by

            <Image style={{width: 50, height: 32, marginTop: 10}} source={require('../restos/Yelp_trademark_RGB.png')}/>

          </Text>
          <Text style={styles.congratsTextStyle}>
            CONGRATULATIONS!
          </Text>
          <Text style={styles.youareTextStyle}>
            You are going to
          </Text>
        </Card>
        <TouchableHighlight underlayColor={'#1259ba'} onPress={()=> Linking.openURL(restos[first].yelp_url)}>
          <View style={styles.row} >
            <Image source={{uri: restos[first].image_url}} style={styles.image} />
            <View style={styles.column1} underlayColor={'#1259ba'} >
              <Text style={styles.titleText}>{restos[first].name}</Text>
              <Text>{this.renderStars(restos[first].rating)}</Text>
              <Text style={styles.categoryText}>
                {this.renderCategories(restos[first].categories)}
              </Text>
            </View>
          </View>
        </TouchableHighlight>

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
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 50,
    height: 20,
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
  image: {
    width: 65,
    height: 65,
    marginRight: 15,
    borderRadius: 20,
  },
  column1: {
    flexDirection: 'column'
  },
  column2: {
    paddingLeft: 20
  },

  titleText: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
  },
  categoryText: {
    fontSize: 10,
    color: 'white',
  }
};

export default Result;
