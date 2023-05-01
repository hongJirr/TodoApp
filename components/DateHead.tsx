import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default function DateHead(): JSX.Element {
  const getDateFormat = () => {
    const today = new Date();
    const years = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    return `${years}, ${month}월${day}일`;
  };

  return (
    <>
      <StatusBar backgroundColor="#EF9A9A" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{getDateFormat()}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#EF9A9A',
  },
  dateText: {
    fontSize: 24,
    color: '#FFF',
  },
});
