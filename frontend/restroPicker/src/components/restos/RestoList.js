import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class RestoList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let group_id = this.props.group.id;
    setTimeout(() =>    axios.get(`http://localhost:3000/api/restaurants?group=${group_id}`)
      .then(response => console.log(response)), 1000)
    ;
}



  render() {
    return (
      <View>
        <Text>RestoList!!</Text>
        <Text>RestoList!!</Text>
        <Text>RestoList!!</Text>
        <Text>RestoList!!</Text>
        <Text>RestoList!!</Text>
        <Text>RestoList!!</Text>
      </View>
    );
  }
}

export default RestoList;
