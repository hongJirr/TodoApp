import React, {useState} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

interface ITodos {
  id: number;
  text: string;
  done: boolean;
}
function App(): JSX.Element {
  const [todos, setTodos] = useState<ITodos[]>([
    {
      id: 1,
      text: '작업환경 설정2',
      done: true,
    },
    {id: 2, text: '리액트네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들기', done: false},
  ]);

  /**
   * TodoList 등록
   * @param text
   */
  const insertTodo = (text: string) => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  // 할일 toggle 기능 추가
  const onToggle = (id: number) => {
    console.debug(id);
    const nextTodos: ITodos[] = todos.map((todo: ITodos) =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        {/** Keyboard가 화면을 가리는것을 막기 위해서 사용. */}
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          <DateHead />
          {todos.length === 0 && <Empty />}
          <TodoList todos={todos} onToggle={onToggle} />
          <AddTodo onInsert={insertTodo} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
});

export default App;
