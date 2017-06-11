import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListView } from 'react-native';
import axios from 'axios';
import { values } from 'lodash';
import RestoItem from './RestoItem';

class RestoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  componentWillMount() {
    let group_id = this.props.group.id;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    setTimeout(() =>    axios.get(`http://localhost:3000/api/restaurants?group=${group_id}`)
      .then(response => {
        this.setState({ dataSource: ds.cloneWithRows(values(response.data.restaurants))
        });
      }), 1000);
  }

  renderRow(resto) {
    return <RestoItem resto={resto} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow ={this.renderRow}

      />
    );
  }
}

export default RestoList;
