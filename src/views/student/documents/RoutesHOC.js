import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SubjectList from '../../../components/SubjectList'
import DocumentsList from './DocumentsList'
import PDFViewer from '../../../common/PdfViewer'

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
          <Stack.Screen name="subjectlist">
            {props => <SubjectList {...props} screenName="documentlist" />}
          </Stack.Screen>
          <Stack.Screen name="documentlist" component={DocumentsList} />
          <Stack.Screen name="pdfview" component={PDFViewer} />
        </Stack.Navigator>
        <WrappedComponent />
      </>
    )
  }
}
export default RoutesHOC
