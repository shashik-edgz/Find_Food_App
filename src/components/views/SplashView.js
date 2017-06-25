import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

class SplashView extends Component {
  render() {
    const iconGPS = <Icon name="ios-locate-outline" color={'#FFF'} size={22} />;
    const iconFav = <Icon name="ios-heart-outline" color={'#FFF'} size={22} />;
    const markerImage = require('../resources/markers.png'); // eslint-disable-line global-require

    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0)" />
        <MapView
          style={styles.map}
          initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
          }}
        >
        <MapView.Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          onPress={() => { Actions.parking(); }}
          image={markerImage}
          width={20}
        />

        <MapView.Marker
          coordinate={{ latitude: 37.781678, longitude: -122.445964 }}
          onPress={() => { Actions.parking(); }}
          image={markerImage}
          width={20}
        />

        <MapView.Marker
          coordinate={{ latitude: 37.777196, longitude: -122.422532 }}
          onPress={() => { Actions.parking(); }}
          image={markerImage}
          width={20}
        />

        <MapView.Marker
          coordinate={{ latitude: 37.770473, longitude: -122.445797 }}
          onPress={() => { Actions.parking(); }}
          image={markerImage}
          width={20}
        />

        <MapView.Marker
          coordinate={{ latitude: 37.800389, longitude: -122.442283 }}
          onPress={() => { Actions.parking(); }}
          image={markerImage}
          width={20}
        />

        <MapView.Marker
          coordinate={{ latitude: 37.760387, longitude: -122.422448 }}
          onPress={() => { Actions.parking(); }}
          image={markerImage}
          width={20}
        />

        </MapView>

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(0,0,0,0.5)'}
            underlineColorAndroid={'transparent'}
            placeholderText={'Search Park'}
          />
        </View>

        <ActionButton
          style={styles.actionButtonIcon}
          buttonColor={'#FF5722'}
          onPress={() => { console.log('hi'); }}
          icon={iconGPS}
        />

        <ActionButton
          style={styles.actionButtonIcon}
          buttonColor={'#F44336'}
          onPress={() => { console.log('hi'); }}
          icon={iconFav}
          offsetY={100}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  actionButtonIcon: {
    flex: 1,
    fontSize: 20,
    height: 22
  },
  inputView: {
     backgroundColor: 'rgba(0,0,0,0)',
     position: 'absolute',
     top: 25,
     left: 5,
     right: 5
  },
  input: {
     height: 36,
     padding: 10,
     marginTop: 20,
     marginLeft: 10,
     marginRight: 10,
     fontSize: 18,
     backgroundColor: '#FFF'
  }

});

export { SplashView };
