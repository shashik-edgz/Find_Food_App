import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Header</Text>
    </View>
  );
};


const styles = {
  textStyle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#FFF'
  },
  viewStyle: {
    backgroundColor: '#EF7700',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  }
};

export { Header };
