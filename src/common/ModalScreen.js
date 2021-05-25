import React from 'react'
import {Modal, View, Text} from 'react-native'
import styles from '../css/App.scss'
import DocumentsList from '../views/student/documents/DocumentsList'

const screenList = {
  DocumentsList
}

const ModalScreen = ({route, navigation}) => {
  const {Screen} = route.params
  //   console.log(<Screen />)
  const Val = screenList[Screen]

  return (
    // <Modal animationType="fade" visible={true}>
    <View style={styles.viewCenter}>
      <Text>hello</Text>
      <Val />
    </View>
    // </Modal>
  )
}

export default ModalScreen
