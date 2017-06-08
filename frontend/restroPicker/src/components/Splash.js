import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import { Button, Card, CardSection, Header, Input, Spinner } from './common';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalCreateVisible: false,
      modalJoinVisible: false,
      username: '',
      group_code: '',
    };
  }

  setModalCreateVisible(visible) {
    this.setState({modalCreateVisible: visible});
  }

  setModalJoinVisible(visible) {
    this.setState({modalJoinVisible: visible});
    this.props.clearErrors();
  }

  renderCreateButton() {
    return (
      <Button onPress={ () => {this.setModalCreateVisible(true)} }>
        New Group
      </Button>
    );
  }

  renderJoinButton() {
    return (
      <Button onPress={ () => {this.setModalJoinVisible(true)} }>
        Join Group
      </Button>
    );
  }

  createNewGroup() {
    const user = this.state;
    this.props.createGroup(user);
  }

  joinAGroup() {
    const user = this.state;
    this.props.joinGroup(user);
  }

  // renderErrors() {
  //
  // }

  render () {
    return (
      <View>
        <Header headerText="RestoPick" />
        <Card>
          <CardSection>{this.renderCreateButton()}</CardSection>
          <CardSection>{this.renderJoinButton()}</CardSection>
        </Card>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalCreateVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <View style={{marginTop: 22}}>
            <View>
              <Header headerText="Create a Group" />
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
                  <Button onPress={() => {this.createNewGroup()}}>
                    Create
                  </Button>
                </CardSection>
              </Card>


              <TouchableHighlight onPress={() => { this.setModalCreateVisible(!this.state.modalCreateVisible) }}>
                <Text>Cancel</Text>
              </TouchableHighlight>

            </View>
          </View>
        </Modal>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalJoinVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Header headerText="Join a Group" />
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
                <Button onPress={() => {this.joinAGroup()}}>
                  Join
                </Button>
              </CardSection>
            </Card>

            <TouchableHighlight onPress={() => { this.setModalJoinVisible(!this.state.modalJoinVisible) }}>
              <Text>Cancel</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

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

export default Splash;
