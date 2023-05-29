import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ITodos} from '../TodoList/TodoList.type';

export default function TodoItem({todo}: {todo: ITodos}) {
  return (
    <View style={styles.item}>
      <View style={[styles.circle, todo.done && styles.fill]} />
      <Text style={[styles.text, todo.done && styles.lineThrough]}>
        {todo.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    marginRight: 26,
  },
  fill: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF9A9A',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
});
