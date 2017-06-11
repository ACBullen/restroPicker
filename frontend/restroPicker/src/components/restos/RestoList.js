import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  } from 'react-native';
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

  renderRow({data, active}) {
    return <RestoItem data={data} active={active} />;
  }

  change(nextOrder) {
    alert(nextOrder);
  }

  render() {
    return (
      <View style = {styles.container}>
        <SortableList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={this.state.data}
          renderRow={this.renderRow}
          onChangeOrder={this.change}/>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  list: {
    flex: 1,
  },

  contentContainer: {
    width: window.width,
    paddingHorizontal: 30,
      }
  };

export default RestoList;
