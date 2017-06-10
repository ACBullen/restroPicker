import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListView } from 'react-native';
import axios from 'axios';

class RestoList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let group_id = this.props.group.id;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    setTimeout(() =>    axios.get(`http://localhost:3000/api/restaurants?group=${group_id}`)
      .then(response => {
        this.dataSource = ds.cloneWithRows(response.data.restaurants);
      })
    );
  }

  renderRow() {
    
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow ={this.renderRow}

      />
    );
  }
}

export default RestoList;
