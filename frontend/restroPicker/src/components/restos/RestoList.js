import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class RestoList extends Component {

  componentWillMount() {
    let lng;
    let lat;

    navigator.geolocation.getCurrentPosition((position) => {
      lng = position.coords.longitude;
      lat = position.coords.latitude;

      axios({
        method: 'get',
        url: "https://api.yelp.com/v3/businesses/search",
        headers: {"Authorization": "bearer U3LFmhPsqGDeHcf-2uVmQbNj03fI6Wp7gfQti7Ml0YctrPN3PhLwE3GEXT2htv3wJgz90ugTwq0FOap5hJ0rxUNUad81PyqAzmr3yuogEPLQ0jzoVrDEp3UeSkYzWXYx"},
        params: {
          term: "restaurants",
          latitude: lat,
          longitude: lng,
          radius: 1000,
          limit: 10,
          sort_by: "distance"
        }
      }).then(response => console.log(response));
    });
  }





  render() {
    return (
      <View>
        <Text>RestoList!!</Text>
      </View>
    );
  }
}

export default RestoList;
