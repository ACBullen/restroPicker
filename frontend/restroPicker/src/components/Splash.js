import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import { Button, Card, CardSection, Header, Input, Spinner } from './common';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalCreateVisible: false,
      modalJoinVisible: false,
      name: '',
      code: '',
    };
  }

  setModalCreateVisible(visible) {
    this.setState({modalCreateVisible: visible});
  }

  setModalJoinVisible(visible) {
    this.setState({modalJoinVisible: visible});
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
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}
                  />
                </CardSection>

                <CardSection>
                  <Button>
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
                  value={this.state.name}
                  onChangeText={text => this.setState({ name: text })}
                />
              </CardSection>
              <CardSection>
                <Input
                  placeholder="What's your group code?"
                  label="Code"
                  value={this.state.code}
                  onChangeText={text => this.setState({ code: text })}
                />
              </CardSection>

              <CardSection>
                <Button>
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

export default Splash;
