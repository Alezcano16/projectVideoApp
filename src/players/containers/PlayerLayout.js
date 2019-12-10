import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Video from 'react-native-video';
const PlayerLayout = props => {
  return (
    <View style={styles.container}>
      <View style={styles.video}>{props.children}</View>
      {props.loading && <View style={styles.overlay}>{props.loader}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlayerLayout;
