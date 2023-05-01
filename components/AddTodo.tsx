import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function AddTodo() {
  return <View style={style.block} />;
}

const style = StyleSheet.create({
  block: {
    height: 64,
    backgroundColor: 'red',
  },
});
