import React from 'react';
import { Text } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import StartedView from './components/views/StartedView';
import EnterMobileView from './components/views/EnterMobileView';
import { SplashView, ParkView } from './components/views';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key={'auth'} initial>
        <Scene key={'started'} component={StartedView} hideNavBar={'true'} />
        <Scene key={'enter_mobile'} component={EnterMobileView} hideNavBar={false} hideBackImage={false} title={'Get Start'} titleStyle={{ color: '#082C87', fontFamily: 'Open San Regular', fontSize: 22, fontWeight: '400' }} navigationBarStyle={{ backgroundColor: 'white', borderBottomColor: 'transparent' }} />
      </Scene>
      <Scene key={'main'}>
        <Scene key={'splash'} component={SplashView} hideNavBar={'true'} />
        <Scene key={'parking'} component={ParkView} hideNavBar={'true'} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
