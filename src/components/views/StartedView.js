import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
 } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { WELCOME_TEXT, INTERDUCTION_TEXT } from '../../String.js';

class StartedView extends Component {
  componentWillMount() {
    console.log('StartedView intialized');
  }

  // Login button press event handler
  onButtonPress() {
    Actions.enter_mobile();
  }

  render() {
    const logoImage = require('../resources/logo.png'); // eslint-disable-line global-require
    const bgImage = require('../resources/background.jpg'); // eslint-disable-line global-require

    const {
      container,
      logoContainer,
      loginTextStyle,
      buttonContainer,
      innerContainer,
      welcomeTextStyle } = styles;

    return (
      <Image source={bgImage} style={container}>

        <KeyboardAvoidingView behavior={'padding'} style={innerContainer}>

        <StatusBar backgroundColor={'#5D74AE'} barStyle="light-content" />

          <View style={logoContainer}>
            <Text style={welcomeTextStyle}> {WELCOME_TEXT} </Text>
            <Image source={logoImage} style={styles.logo} />
            <Text style={loginTextStyle}> {INTERDUCTION_TEXT} </Text>
          </View>

          <View style={buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this.onButtonPress.bind(this)}>
              <Text style={styles.buttonText}> FIND YOUR SPACE </Text>
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>

      </Image>
    );
  }
}

// TODO: refact this lines of code
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'rgba(8,44,135, 0.3)'
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    padding: 20
  },
  logo: {
    width: 150,
    height: 150
  },
  loginTextStyle: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 35,
    paddingRight: 35,
    textAlign: 'center',
    opacity: 0.9
  },
  welcomeTextStyle: {
    fontSize: 22,
    fontWeight: '400',
    color: '#FFF',
    marginBottom: 10,
    textAlign: 'center',
    opacity: 1
  },
  button: {
    backgroundColor: '#082C87',
    paddingVertical: 20
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
    opacity: 0.8
  }
});

export default StartedView;
