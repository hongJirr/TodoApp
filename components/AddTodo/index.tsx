import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  Keyboard,
} from 'react-native';
import {IAppTodo} from './Apptodo.types';

export default function AddTodo({onInsert}: IAppTodo) {
  const [text, setText] = useState('');
  const onPress = () => {
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  };
  const Button = (
    <View style={styles.buttonStyle}>
      <Image
        source={require('../../assets/images/add.png')}
        style={styles.image}
      />
    </View>
  );
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder="할일을 입력하세요"
        onChangeText={setText}
        value={text}
        onSubmitEditing={onPress} // enter 눌렀을때도 함수 호출
        returnKeyType="done"
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {Button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPress}>
              {Button}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    padding: 11,
    border: '#EF9A9A',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    margin: 20,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 48,
    height: 48,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 100,
  },
});
