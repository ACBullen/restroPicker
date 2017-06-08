import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Button, Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

const Splash = () => {

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
};

export default Splash;
