import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import TodoItem from '../TodoItem';
import {ITodos} from './TodoList.type';

export default function TodoList({todos}: {todos: ITodos[]}) {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
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
  seperator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});
