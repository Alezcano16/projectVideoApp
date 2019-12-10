/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';

const SeparatorHorizontal = props => {
  return (
    <View
      style={[
        styles.separator,
        {
          borderTopColor: props.color ? props.color : '#eaeaea',
        },
      ]}
    />
  );
};
const styles = StyleSheet.create({
  separator: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default SeparatorHorizontal;
