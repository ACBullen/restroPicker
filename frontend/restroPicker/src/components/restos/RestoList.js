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
import { Button } from '../common';
import SortableList from 'react-native-sortable-list';
import { Header } from '../common/Header';

const window = Dimensions.get('window');

class RestoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  // .then(this.props.receiveRestos(this.state.data));

  componentWillMount() {
    let group_id = this.props.group.id;
    setTimeout(() =>    axios.get(`https://resto-pick.herokuapp.com/api/restaurants?group=${group_id}`)
      .then(response => {
        this.setState({ data: response.data.restaurants });
        this.props.receiveRestos(this.state.data);


      }), 1000);
  }

  renderRow({data, active}) {
    return <RestoItem data={data} active={active} />;
  }

  createOrder(restaurants) {
    let order = {};
    let rest_ids = Object.keys(restaurants);
    let end = rest_ids.length;
    let i = 0;
    while (i < end) {
      order[i] = rest_ids[i];
      i += 1;
    }
    return order;
  }


  render() {
    const code = "Group Code: " + this.props.group.group_code;
    this.props.receiveOrder(this.createOrder(this.state.data));
    return (
      <Image    source={require('../barn-wood-background.png')} style={styles.backgroundImage}>
        <View style = {styles.container}>
          <Header headerText={code}></Header>

          <Text style={{color: 'white', marginBottom: 5, marginTop: 5}}>
            Press and Hold to sort your restaurants!
          </Text>

          <SortableList
            style={styles.list}
            contentContainerStyle={styles.contentContainer}
            data={this.state.data}
            renderRow={this.renderRow}
            onChangeOrder={nextOrder => this.props.receiveOrder(nextOrder)}/>
          <Text style={styles.footer}>Powered by

            <Image style={{width: 50, height: 32, marginTop: 10}} source={require('./Yelp_trademark_RGB.png')}/>

          </Text>
        </View>
      </Image>
      );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#1879fd'
  },
  backgroundImage : {
    flex: 1,
    // opacity: 0.6,
    alignSelf: 'stretch',
    width: null
  },
  list: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    paddingVertical: 20,
    color: '#999999',
  },
  contentContainer: {
    width: window.width,
    paddingHorizontal: 30,
  },
  footer: {
    color: 'white',
    marginBottom: 5,
    backgroundColor: 'rgba(0,0,0,0)'}
  };

export default RestoList;
