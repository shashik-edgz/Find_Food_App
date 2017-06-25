import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size = 'small', color = '#FFF' }) => {
  const { spinnerStyle } = styles;

  return (
    <View style={spinnerStyle}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30
  }
};

export { Spinner };
