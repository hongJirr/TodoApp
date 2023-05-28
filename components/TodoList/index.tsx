import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import TodoItem from '../TodoItem';
import {ITodos} from './TodoList.type';

export default function TodoList({todos}: {todos: ITodos[]}) {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}: {item: ITodos}) => (
        <View>
          <TodoItem todo={item} />
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
