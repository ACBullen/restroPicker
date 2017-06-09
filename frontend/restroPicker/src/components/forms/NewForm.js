import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import { Button, Card, CardSection, Header, Input, Spinner } from '../common';
import axios from 'axios';

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
      username: '',
    };
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
        radius: 1000,
        limit: 10,
        sort_by: "distance"
      }
    }).then(({data}) => this.props.receiveRestos(data.businesses));
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.loading !== nextProps.loading) {
      return this.setState({loading: nextProps.loading});
    }
  }

  renderCreateNewGroupButton() {
    if (this.state.loading) {
      return <Spinner size="large" />;
    } else {
      return (
        <Button onPress={() => {this.createNewGroup()}}>
          Create
        </Button>
      );
    }
  }

  createNewGroup() {
    this.setState({ loading: true });
    const user = this.state;
    this.props.createGroup(user);
  }


  render () {
    return (
          <View style={{marginTop: 22}}>
            <View>
              <Card>

                <CardSection>
                  <Input
                    placeholder="What's your name"
                    label="Name"
                    value={this.state.username}
                    onChangeText={text => this.setState({ username: text })}
                  />
                </CardSection>

                <CardSection>
                  {this.renderCreateNewGroupButton()}
                </CardSection>

              </Card>

            </View>
          </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default NewForm;
