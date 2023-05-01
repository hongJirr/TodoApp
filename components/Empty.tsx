import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Empty() {
  return (
    <View style={styles.block}>
      <Image
        source={require('../assets/images/rabbit.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.description}>할일이 없어요</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 20,
    color: '#9e9e9e',
  },
  image: {
    height: 70,
  },
});
