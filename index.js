import 'react-native-gesture-handler'
import React from 'react'
import {AppRegistry} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import App from './App'
import {name as appName} from './app.json'
import AppLoader, {loaderRef} from './src/common/AppLoader'

const Main = () => {
  return (
    <NavigationContainer>
      <AppLoader ref={loaderRef} />
      <App />
    </NavigationContainer>
  )
}

AppRegistry.registerComponent(appName, () => Main)
