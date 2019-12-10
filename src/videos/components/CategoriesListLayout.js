import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const CategoryListLayout = props => {
  return (
    <ImageBackground
      source={require('../../assets/backgronund.png')}
      style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    width: '100%',
    height: 30,
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    lineHeight: 30,
  },
});

export default CategoryListLayout;
