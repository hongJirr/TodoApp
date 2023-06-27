import React from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import TodoItem from '../TodoItem';
import {ITodos} from './TodoList.type';

export default function TodoList({
  todos,
  onToggle,
}: {
  todos: ITodos[];
  onToggle: (id: number) => void;
}) {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      style={styles.list}
      data={todos}
      renderItem={({item}: {item: ITodos}) => (
        <View>
          <Text>{item.id}</Text>
          <TodoItem todo={item} onToggle={onToggle} />
        </View>
      )}
      keyExtractor={item => String(item.id)}
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
