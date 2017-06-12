import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Header, Input, Spinner } from '../common';

class JoinForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      group_code: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors.length === 0) {
      Actions.restoList();
    }
    if (nextProps.group) {
      switch (nextProps.group.results_ready) {
        case true:
          Actions.room();
          break;
        default:
        Actions.rank();
      }
    }
  }

  renderJoinAGroupButton() {
      return (
        <Button onPress={() => {this.joinAGroup()}}>
          Join
        </Button>
      );
  }

  joinAGroup() {
    const user = this.state;
    this.props.joinGroup(user);
  }


  render () {
    return (
         <View style={{marginTop: 100}}>
          <View>
            <Card>
              <CardSection>
                <Input
                  placeholder="What's your name?"
                  label="Name"
                  value={this.state.username}
                  onChangeText={text => this.setState({ username: text })}
                />
              </CardSection>
              <CardSection>
                <Input
                  placeholder="Group code?"
                  label="Code"
                  value={this.state.group_code}
                  onChangeText={text => this.setState({ group_code: text })}
                />
              </CardSection>

              <Text style={styles.errorTextStyle}>
                {this.props.errors}
              </Text>

              <CardSection>
                {this.renderJoinAGroupButton()}
              </CardSection>
            </Card>

          </View>
         </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#b21e1e',
    fontWeight: '400',
  }
};

export default JoinForm;
