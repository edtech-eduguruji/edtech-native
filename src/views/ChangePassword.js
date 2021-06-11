import {Card, Container, Text} from 'native-base'
import React from 'react'
import {View} from 'react-native'
import CustomHeader from '../common/CustomHeader'
import styles from '../css/App.scss'

export default function ChangePassword({navigation}) {
  return (
    <Container>
      <CustomHeader navigation={navigation} title="Change Password" />
      <Container style={[styles.viewCenter, styles.pad10]}>
        <Card>
          <View style={styles.alignCenter}>
            <Text>Change Paasword</Text>
          </View>
        </Card>
      </Container>
    </Container>
  )
}
