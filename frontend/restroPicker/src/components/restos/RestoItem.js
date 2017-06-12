import React, { Component } from 'react';
import {
  Text,
  Animated,
  Easing,
  Dimensions,
  Image
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

    stars(num){
      switch (num) {
        case 3:
          return './stars/small_3.png';
        case 3.5:
          return './stars/small_3_half.png';
        case 4:
          return './stars/small_4.png';
        case 4.5:
          return './stars/small_5.png';
        default:
          return './stars/small_5.png';

      }
    }

    render() {
      const {data, active} = this.props;

      return (
        <Animated.View style={[
          styles.row,
          this._style,
        ]}>
          <Image source={{uri: data.image_url}} style={styles.image}/>
          <Text style={styles.titleText}>{data.name}
          </Text>
        </Animated.View>
      );
    }
  }

const styles = {
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
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
    width: 65,
    height: 65,
    marginRight: 30,
    borderRadius: 20,
  },
  titleText: {
    fontSize: 20,
    color: '#222222',
  }
};




export default RestoItem;
