import {Card, Container, Text} from 'native-base'
import React from 'react'
import {View} from 'react-native'
import styles from '../css/App.scss'

export default function ChangePassword() {
  return (
    <Container style={[styles.viewCenter, styles.pad10]}>
      <Card>
        <View style={styles.alignCenter}>
          <Text>Documents</Text>
        </View>
      </Card>
    </Container>
  )
}
