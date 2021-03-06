import React from 'react';
import {ImageBackground, Text, StyleSheet} from 'react-native';

const Category = props => {
  return (
    <ImageBackground
      style={styles.wrapper}
      source={{uri: props.background_image}}>
      <Text style={styles.genre}>
        {props.genres ? props.genres[0] : 'Sin Genero'}
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genre: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,.75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 0,
  },
});

export default Category;
