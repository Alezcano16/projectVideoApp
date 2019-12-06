import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Suggestions = props => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.cover} source={require('../../assets/logo.png')} />
        <View>
          <Text>Action</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}> {props.NombreModelo}</Text>
        <Text style={styles.year}> {props.AnnoModelo}</Text>
        <Text style={styles.rating}> {props.TipoCarro}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  left: {},
  right: {},
  cover: {},
  title: {},
  year: {},
  rating: {},
});
export default Suggestions;
