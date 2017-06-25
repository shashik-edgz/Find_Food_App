import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Kohana } from 'react-native-textinput-effects';
import Keyboard from 'react-native-keyboard';

import { mobileChanged, loginUser } from '../../actions';
import { Spinner } from '../common';

const model = {

    keys: [],

    listeners: [],

    addKey(key) {
        this.keys.push(key);
        this.notify();
    },

    delKey() {
        this.keys.pop();
        this.notify();
    },

    clearAll() {
        this.keys = [];
        this.notify();
    },

    getKeys() {
        return this.keys;
    },

    onChange(listener) {
        if (typeof listener === 'function') {
            this.listeners.push(listener);
        }
    },

    notify() {
        this.listeners.forEach((listner) => {
            listner(this);
        });
    }
};

class EnterMobile extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentWillMount() {
    console.log('LoginView intialized');
  }

  componentDidMount() {
      model.onChange((m) => {
          this.setState({ text: m.getKeys().join('') });
      });
  }

  // Mobile text input changed event handler
  onMobileChange(text) {
    this.props.mobileChanged(text);
  }

  // Login button press event handler
  onButtonPress() {
    const { mobile } = this.props;
    this.props.loginUser({ mobile });
  }

  // Login button and spinner render helper method
  reanderButoon() {
    if (this.props.loading) {
      return (<Spinner size={'large'} />);
    }
  }

  handleClear() {
    model.clearAll();
  }

  handleDelete() {
      model.delKey();
  }

  handleKeyPress(key) {
      model.addKey(key);
  }

  render() {
    const { container, innerContainer, instructionText, inputMarginTop } = styles;

    return (
      <View style={container}>
        <View>
          <Text style={instructionText}> MyCarParks will send a one time SMS message to verify your phone number. Carrier SMS charges may apply. </Text>
        </View>
        <ScrollView style={innerContainer}>
          <Kohana
            style={{ backgroundColor: 'rgba(93, 116, 174, 0.2)' }}
            label={'0121 234 5678'}
            iconClass={FontAwesomeIcon}
            iconName={'phone'}
            iconColor={'#ddd'}
            iconColor={'#5D74AE'}
            labelStyle={{ color: '#5D74AE', fontWeight: '300' }}
            inputStyle={{ color: '#5D74AE' }}
            onChangeText={this.onMobileChange.bind(this)}
            editable={false}
            value={this.state.text}
          />
        <Text style={{ textAlign: 'center', fontWeight: '100', marginTop: 5 }}>We'll send a text to verify your phone</Text>

        <View style={{ marginTop: 80, marginBottom: 10 }}>
            <Keyboard
                keyboardType="decimal-pad"
                onClear={this.handleClear.bind(this)}
                onDelete={this.handleDelete.bind(this)}
                onKeyPress={this.handleKeyPress.bind(this)}
                disableDot={true}
                disableOtherText={true}
                disableBorder={true}
                disableClearButtonBackground={true}
            />
        </View>

        <TouchableOpacity style={[inputMarginTop, styles.button]} onPress={this.onButtonPress.bind(this)}>
            <Text style={styles.buttonText}> NEXT </Text>
        </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  innerContainer: {
    padding: 16,
    marginTop: 10
  },
  inputMarginTop: {
    marginTop: 4
  },
  instructionText: {
    marginTop: 30,
    color: '#082C87',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Open San Regular'
  },
  button: {
    backgroundColor: '#082C87',
    paddingVertical: 20,
    marginTop: 30
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
    opacity: 0.8,
    fontFamily: 'Open San Regular'
  }
});

const mapStateToProps = ({ auth }) => {
  const { mobile, error, loading } = auth;
  return { mobile, error, loading };
};

export default connect(mapStateToProps, { mobileChanged, loginUser })(EnterMobile);
