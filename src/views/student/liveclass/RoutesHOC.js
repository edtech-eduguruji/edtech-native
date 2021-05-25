import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LiveClassList from './LiveClassList'
import ZoomViewer from '../../../common/ZoomViewer'

const Stack = createStackNavigator()

function RoutesHOC(WrappedComponent) {
  return () => {
    return (
      <>
        <Stack.Navigator
          mode="modal"
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="liveclasslist">
            {props => <LiveClassList {...props} screenName="zoomview" />}
          </Stack.Screen>
          <Stack.Screen name="zoomview" component={ZoomViewer} />
        </Stack.Navigator>
        <WrappedComponent />
      </>
    )
  }
}
export default RoutesHOC
