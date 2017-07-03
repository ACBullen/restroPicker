import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import { receiveLocation } from '../actions/resto_actions';
import axios from 'axios';

class Splash extends Component {

  componentWillMount() {
      let lat;
      let lng;
    navigator.geolocation.getCurrentPosition((position) => {
      lng = position.coords.longitude;
      lat = position.coords.latitude;
      this.props.receiveLocation({lng, lat});
    });
  }

  render () {
    return (
      <Image source={require('./background.png')} style={styles.backgroundImage}>
        <View style={{marginTop: 100, marginLeft: 30, marginRight: 30}}>
          <Card>
            <CardSection>
              <View style={styles.viewStyle}>
                <Text style={styles.titleStyle}>RestoPick</Text>
              </View>
            </CardSection>
            <CardSection>
              <Button onPress={ () => {Actions.newGroupForm();}}>
                New Group
              </Button>
            </CardSection>
            <CardSection>
              <Button onPress={ () => {Actions.joinGroupForm();}}>
                Join Group
              </Button>
            </CardSection>
            <CardSection>
              <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Choose a place to eat with minimum discord</Text>
              </View>
            </CardSection>
          </Card>
        </View>
      </Image>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 54,
    fontFamily: 'Arial',
    color: 'white',
    fontWeight: '800',
    backgroundColor: 'rgba(0,0,0,0)',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  backgroundImage : {
    flex: 1,
    // opacity: 0.1,
    alignSelf: 'stretch',
    width: null
  },
  viewStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'Arial',
    color: 'white',
    fontWeight: '800',
    backgroundColor: 'rgba(0,0,0,0)',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .9,
    shadowRadius: 1,
  }
};

const mapDispatchToProps = dispatch => ({
  receiveLocation: data => dispatch(receiveLocation(data)),
});

export default connect(
  null,
  mapDispatchToProps
)(Splash);

// <Image
//   style={{width: 300, height: 300}}
//   source={require('./dinner-plate.png')}
// />
