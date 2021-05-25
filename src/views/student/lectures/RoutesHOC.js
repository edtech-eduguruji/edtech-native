import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SubjectList from '../../../components/SubjectList'
import LecturesList from './LecturesList'
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
            {props => <SubjectList {...props} screenName="lecturelist" />}
          </Stack.Screen>
          <Stack.Screen name="lecturelist" component={LecturesList} />
          <Stack.Screen name="lectureview" component={PDFViewer} />
        </Stack.Navigator>
        <WrappedComponent />
      </>
    )
  }
}
export default RoutesHOC
