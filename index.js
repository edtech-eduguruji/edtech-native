import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SplashScreen from 'react-native-splash-screen';

class Main extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent(appName, () => Main);
