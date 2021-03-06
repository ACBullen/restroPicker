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
      <Image source={require('../barn-wood-background.png')} style={styles.backgroundImage}>
      <View>
        <Header headerText={code}></Header>
        <Card>
          <Text style={{color: 'white', marginBottom: 10, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0)'}}>Powered by

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
                {"\n"}
                {restos[first].address}
              </Text>
            </View>
          </View>
        </TouchableHighlight>

        <Card>
          <TouchableHighlight underlayColor={'rgba(149,103,67,1)'} onPress={()=> Linking.openURL(restos[second].yelp_url)}>
            <Text style={styles.resultTextStyle}>
              Plan B: {restos[second].name} {"\n"}
              <Text style={styles.categoryText}>{restos[second].address} </Text>
            </Text>
          </TouchableHighlight>
        </Card>

        <Card>
          <TouchableHighlight underlayColor={'rgba(149,103,67,1)'} onPress={()=> Linking.openURL(restos[third].yelp_url)}>
            <Text style={styles.resultTextStyle}>
              Plan C: {restos[third].name} {"\n"}
              <Text style={styles.categoryText}>{restos[third].address}</Text>
            </Text>
          </TouchableHighlight>
        </Card>
      </View>
      </Image>
    );
  }
}

const styles = {
  backgroundImage : {
    flex: 1,
    // opacity: 0.6,
    alignSelf: 'stretch',
    width: null
  },
  congratsTextStyle: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'white',
    fontWeight: '800',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  youareTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    fontWeight: '400',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  winnerTextStyle: {
    fontSize: 20,
    // alignItems: 'center',
    color: 'black',
    fontWeight: '800',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  resultTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(149,103,67,0.8)',
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
    backgroundColor: 'rgba(0,0,0,0)',
  },
  categoryText: {
    fontSize: 12,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
  }
};

export default Result;
