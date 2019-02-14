import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper';

class RNRoundTabBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    ...ifIphoneX({
      height: 70
    }, {
      height: 50
    })
  },
  circle: {
    ...ifIphoneX({
      height: 80,
      width: 80
    }, {
      height: 60,
      width: 60
    }),
    borderRadius: 100,
    bottom: 20,
    backgroundColor: 'blue'
  }
});

export default RNRoundTabBar;
