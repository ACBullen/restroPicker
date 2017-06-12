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
        rest_id: parseInt(order[index]),
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

      <View style={styles.viewStyle}>
        {this.formatRankings().map(obj =>
          <CardSection>
            <Text style={styles.textStyle}>
            {obj.ranking}: {restos[obj.rest_id].name}
            </Text>
          </CardSection>)}
          <CardSection>
            <Button onPress={ () => {this.submitNewRankings();}}>
              Submit
            </Button>
          </CardSection>
      </View>
    );
  }
}

const styles = {
  viewStyle : {
    paddingTop: 20
  },
  textStyle : {
    paddingLeft: 50,
    color: 'white',
    fontSize: 18
  }

};

export default RankingPage;
