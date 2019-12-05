import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const SuggestionListLayout = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
  },
  title: {
    width: '100%',
    height: 30,
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 10,
    lineHeight: 30,
  },
});

export default SuggestionListLayout;
