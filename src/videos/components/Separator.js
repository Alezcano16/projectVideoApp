/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Separator = props => {
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
    borderTopWidth: 1,
    paddingVertical: 5,
  },
});

export default Separator;
