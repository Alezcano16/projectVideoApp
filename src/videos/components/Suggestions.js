import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Suggestions = props => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.cover} source={require('../../assets/logo.png')} />
        <View style={styles.genreContainer}>
          <Text style={styles.genre}>Action</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}> {props.NombreModelo}</Text>
        <Text style={styles.year}> {props.AnnoModelo.trim()}</Text>
        <Text style={styles.rating}> {props.TipoCarro}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  left: {},
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    color: '#ffffff',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
  genreContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  genre: {
    color: 'white',
    fontSize: 11,
  },
});
export default Suggestions;
