import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={styles.right}>{props.children}</View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'gray',
  },
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default Header;
