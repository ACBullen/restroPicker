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
      <View>
        <Card>
          <CardSection>
            <View style={{paddingLeft: 25, paddingRight: 25, paddingTop: 30, paddingBottom: 30 }}>
              <Text style={{fontSize: 50, fontFamily: 'Arial', color: 'white', fontWeight: '800' }}>RestoPick</Text>
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
            <View style={{paddingLeft: 25, paddingRight: 25, paddingTop: 30, paddingBottom: 30 }}>
              <Text style={{fontSize: 20, fontFamily: 'Arial', color: '#fcc05f', fontWeight: '800' }}>Choose a place to eat with minimum discord</Text>
            </View>
          </CardSection>
        </Card>
      </View>
    );
  }
}


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
