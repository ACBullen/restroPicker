import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
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
            <Button onPress={ () => {Actions.newGroupForm();}}>
              New Group
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={ () => {Actions.joinGroupForm();}}>
              Join Group
            </Button>
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
