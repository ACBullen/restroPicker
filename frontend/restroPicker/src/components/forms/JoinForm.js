import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import { Button, Card, CardSection, Header, Input, Spinner } from '../common';

class JoinForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
      username: '',
      group_code: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.loading !== nextProps.loading) {
      return this.setState({loading: nextProps.loading});
    }
  }

  renderJoinAGroupButton() {
    if (this.state.loading) {
      return <Spinner size="large" />;
    } else {
      return (
        <Button onPress={() => {this.joinAGroup()}}>
          Join
        </Button>
      );
    }
  }

  joinAGroup() {
    this.setState({ loading: true });
    const user = this.state;
    this.props.joinGroup(user);
  }


  render () {
    return (
         <View style={{marginTop: 22}}>
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
                  placeholder="What's your group code?"
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
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default JoinForm;
