import React, { Component } from 'react';
import {
  Text,
  Animated,
  Easing,
  Dimensions,
  Image,
  View
 } from 'react-native';

const window = Dimensions.get('window');

const stars = {
  3: './stars/small_3.png',
  3.5: './stars/small_3_half.png',
  4: './stars/small_4.png',
  4.5: './stars/small_4_half.png',
  5: './stars/small_5.png'
};

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

    renderStars(num) {
      switch (num) {
        case 3:
          return (<Image source={require(`./stars/small_3.png`)} style={{width: 70, height: 12}}/>);
        case 3.5:
          return (<Image source={require(`./stars/small_3_half.png`)} style={{width: 70, height: 12}}/>);
        case 4:
          return (<Image source={require(`./stars/small_4.png`)} style={{width: 70, height: 12}}/>);
        case 4.5:
          return (<Image source={require(`./stars/small_4_half.png`)} style={{width: 70, height: 12}}/>);
        default:
          return (<Image source={require(`./stars/small_5.png`)} style={{width: 70, height: 12}}/>);
      }
    }

    renderCategories(text) {
      if (text.length > 30) {
        return (text.slice(0,27) + "...");
      } else {
        return (text);
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

        <View style={styles.column1}>
          <Text style={styles.titleText}>{data.name}</Text>
          <Text>{this.renderStars(data.rating)}</Text>
          <Text style={styles.categoryText}>
            {this.renderCategories(data.categories)}
          </Text>
        </View>


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
    marginRight: 15,
    borderRadius: 20,
  },
  column1: {
    flexDirection: 'column'
  },
  column2: {
    paddingLeft: 20
  },

  titleText: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
  },
  categoryText: {
    fontSize: 10,
    color: 'white',
  }

};




export default RestoItem;
