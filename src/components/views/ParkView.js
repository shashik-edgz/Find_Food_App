import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView } from 'react-native';

class ParkView extends Component {
  render() {
    const dummyText = 'Here the Park UI goes';
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgba(	255, 87, 34, 0)" />
        <ScrollView><Text style={styles.textStyle}>{dummyText}</Text></ScrollView>
        <View style={styles.footer}><Text style={styles.fotterText}>BOOK NOW</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  textStyle: {
    textAlign: 'center',
    justifyContent: 'center',

  },
  footer: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#082C87'
  },
  fotterText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 22
  }
});

export { ParkView };
