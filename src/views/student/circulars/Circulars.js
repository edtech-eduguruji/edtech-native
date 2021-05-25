import {Card, Container, Text} from 'native-base'
import React from 'react'
import {View} from 'react-native'
import styles from '../../../css/App.scss'

export default function Circulars() {
  return (
    <Container style={[styles.viewCenter, styles.pad10]}>
      <Card>
        <View style={styles.alignCenter}>
          <Text>Circulars</Text>
        </View>
      </Card>
    </Container>
  )
}
