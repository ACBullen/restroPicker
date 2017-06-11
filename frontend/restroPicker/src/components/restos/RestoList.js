import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  StyleSheet,
  Image,
  Dimensions,
  Platform } from 'react-native';
import axios from 'axios';
import { values } from 'lodash';
import RestoItem from './RestoItem';
import SortableList from 'react-native-sortable-list';

const window = Dimensions.get('window');

class RestoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentWillMount() {
    let group_id = this.props.group.id;
    setTimeout(() =>    axios.get(`http://localhost:3000/api/restaurants?group=${group_id}`)
      .then(response => {
        this.setState({ data: response.data.restaurants });
      }), 1000);
  }

  renderRow(resto) {
    return <RestoItem resto={resto} />;
  }

  render() {
    return (
      <View
        dataSource={this.state.dataSource}
        renderRow ={this.renderRow}

      />
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  }
};

export default RestoList;
