import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, CardSection } from '../common';

class RankingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      order: []
    };
  }


  componentWillMount() {
    
  }
  submitNewRankings() {
    const ranking = this.state.order;
    this.props.createRankings(ranking);
  }

  render() {
    return (
      <View>
        <CardSection>
          <Button onPress={ () => {this.submitNewRankings();}}>
          Submit
          </Button>
        </CardSection>

        <Text>Resto Rank</Text>
        <Text>Resto Rank</Text>
        <Text>Resto Rank</Text>
        <Text>Resto Rank</Text>
        <Text>Resto Rank</Text>
        <Text>Resto Rank</Text>
      </View>
    );
  }
}


export default RankingPage;
