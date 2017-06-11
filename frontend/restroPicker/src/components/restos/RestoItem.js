import React, { Component } from 'react';
import { CardSection } from '../common';
import { Text } from 'react-native';

class RestoItem extends Component {
  render() {
    return (
      <CardSection>
        <Text>{this.props.resto.name}</Text>
      </CardSection>
    );
  }
}

export default RestoItem;
