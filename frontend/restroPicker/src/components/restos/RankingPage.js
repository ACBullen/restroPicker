import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, CardSection } from '../common';

class RankingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {}
    };
  }

  componentWillMount() {
    console.log(this.props);
    if (this.state.order !== this.props.order)
      return this.setState({order: this.props.order});
  }

  formatRankings() {
    let rankingArray = [];
    const {order} = this.state;
    const {user_id} = this.props;
    Object.keys(order).forEach((index) => {
      let rankingObject = {
        user_id: user_id,
        resto_id: parseInt(order[index]),
        ranking: (parseInt(index) + 1)
      };
      rankingArray.push(rankingObject);

    });
    return rankingArray;
  }

  submitNewRankings() {
    const rankings = this.formatRankings();
    this.props.createRankings(rankings);
  }

  render() {
    const {user_id, restos, order} = this.props;
    return (

      <View>
        <CardSection>
          <Button onPress={ () => {this.submitNewRankings();}}>
          Submit
          </Button>
        </CardSection>
        {this.formatRankings().map(obj =>
          <CardSection>
            <Text>
            {obj.ranking}: {restos[obj.resto_id].name}
            </Text>
          </CardSection>)}
      </View>
    );
  }
}


export default RankingPage;
