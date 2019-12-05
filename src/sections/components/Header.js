import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
});
export default Header;
