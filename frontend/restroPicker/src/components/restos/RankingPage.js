import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
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
      <Image source={require('./ranking_bg.png')} style={styles.backgroundImage}>

        <View style={styles.viewStyle}>
          {this.formatRankings().map(obj =>
            <CardSection>
              <Text style={styles.textStyle}>
              {obj.ranking}.   {restos[obj.rest_id].name}
              </Text>
            </CardSection>)}
        </View>
        <View style={styles.buttonStyle}>
            <CardSection>
              <Button onPress={ () => {this.submitNewRankings();}}>
                Submit
              </Button>
            </CardSection>
        </View>
      </Image>
    );
  }
}

const styles = {
  buttonStyle: {
    padding: 30,
    position: 'absolute',
    top: 470,
    left: 0,
    right: 0,
    bottom: 0,
  },
  viewStyle : {
    paddingTop: 100,
  },
  textStyle : {
    paddingLeft: 50,
    paddingRight: 50,
    color: 'black',
    fontSize: 18,
    fontWeight: "500",
    backgroundColor: 'rgba(0,0,0,0)',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  backgroundImage : {
    flex: 1,
    // opacity: 0.6,
    alignSelf: 'stretch',
    width: null
  }

};

export default RankingPage;
