import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, Header, Input, Spinner } from './common';

class Splash extends Component {

  renderCreateButton() {
    return (
      <Button>
        Create
      </Button>
    );
  }

  renderJoinButton() {
    return (
      <Button>
        Join
      </Button>
    );
  }

  render () {
    return (
      <View>
        <Header headerText="RestoPick" />
        <Card>
          <CardSection>
            {this.renderCreateButton()}
          </CardSection>

          <CardSection>
            {this.renderJoinButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default Splash;
