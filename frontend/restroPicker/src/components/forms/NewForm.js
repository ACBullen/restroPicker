import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Image } from 'react-native';
import { Button, Card, CardSection, Header, Input, Spinner } from '../common';
import axios from 'axios';
import { values } from 'lodash';
import { Actions } from 'react-native-router-flux';

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.button = true;
  }

  componentWillMount() {
    let location = this.props.location;
    let lng = location.lng;
    let lat = location.lat;
    axios({
      method: 'get',
      url: "https://api.yelp.com/v3/businesses/search",
      headers: {"Authorization": "bearer U3LFmhPsqGDeHcf-2uVmQbNj03fI6Wp7gfQti7Ml0YctrPN3PhLwE3GEXT2htv3wJgz90ugTwq0FOap5hJ0rxUNUad81PyqAzmr3yuogEPLQ0jzoVrDEp3UeSkYzWXYx"},
      params: {
        term: "restaurants",
        latitude: lat,
        longitude: lng,
        open_now: true,
        limit: 10,
        sort_by: "distance"
      }
    }).then(({data}) => this.props.receiveRestos(data.businesses));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.group.id) {
      let group_id = nextProps.group.id;
      let restos = nextProps.restos;
      let restaurants = this.formatRestos(group_id, values(restos));
      this.props.createRestos(restaurants);
      Actions.rank();
    }

  }

  formatRestos(group_id, restos) {
     return restos.map((resto) => ({
       group_id: group_id,
       name: resto.name,
       rating: resto.rating,
       yelp_url: resto.url,
       address: resto.location.display_address[0],
       image_url: resto.image_url,
       categories: resto.categories.map((category) => category.title).join(", ")
     })
   );
  }



  renderCreateNewGroupButton() {
      return (
        <Button onPress={() => {this.createNewGroup();}}>
          Create
        </Button>
      );
    }

  createNewGroup() {
    if (this.button) {

    const user = this.state;
    this.props.createGroup(user);
    this.button = false;
    }
  }


  render () {
    return (
      <Image source={require('./place_setting.png')} style={styles.backgroundImage}>
        <View style={styles.containerStyle}>
              <Card>
                <CardSection>
                  <Input
                    placeholder="What's your name?"
                    label="Name"
                    value={this.state.username}
                    onChangeText={text => this.setState({ username: text })}
                  />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                </Text>
              </Card>
        </View>

        <View style={{padding: 40}}>
          <CardSection>
            {this.renderCreateNewGroupButton()}
          </CardSection>
        </View>
      </Image>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#b21e1e',
    fontWeight: '400',
  },
  backgroundImage: {
    flex: 1,
    // opacity: 0.1,
    alignSelf: 'stretch',
    width: null
  },
  containerStyle: {
    marginTop: 180,
    marginLeft: 40,
    paddingBottom: 35,
    paddingTop: 35,
    backgroundColor: 'rgba(249, 248, 247, 0.1)',
  }
};

export default NewForm;
