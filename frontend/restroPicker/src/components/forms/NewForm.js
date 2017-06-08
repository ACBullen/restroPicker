import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import { Button, Card, CardSection, Header, Input, Spinner } from '../common';

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
      username: '',
    };
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
