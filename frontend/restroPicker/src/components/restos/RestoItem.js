import React, { Component } from 'react';
import {
  Text,
  Animated,
  Easing,
  Dimensions
 } from 'react-native';

const window = Dimensions.get('window');

class RestoItem extends Component {

  constructor(props) {
    super(props);

    this._active = new Animated.Value(0);
    this._style = {
        transform: [{
          scale: this._active.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.1],
          }),
        }],
        shadowRadius: this._active.interpolate({
          inputRange: [0, 1],
          outputRange: [2, 10],
        }),
      };
    }


    componentWillReceiveProps(nextProps) {
      if (this.props.active !== nextProps.active) {
        Animated.timing(this._active, {
          duration: 300,
          easing: Easing.bounce,
          toValue: Number(nextProps.active),
        }).start();
      }
    }

  render() {
    const {data, active} = this.props;

    return (
      <Animated.View style={[
        styles.row,
        this._style,
      ]}>
        <Text style={styles.text}>{data.name}</Text>
      </Animated.View>
    );
  }
}

const styles = {
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    height: 80,
    flex: 1,
    marginTop: 7,
    marginBottom: 12,
    borderRadius: 4,
    width: window.width - 30 * 2,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 1,
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 2
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 30,
    borderRadius: 25,
  }
};




export default RestoItem;
