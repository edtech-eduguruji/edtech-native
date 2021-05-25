import {Card, Container, Text, Button} from 'native-base'
import React from 'react'
import {View} from 'react-native'
import styles from '../../css/App.scss'

export default function Dashboard({navigation}) {
  const handleButton = screen => {
    navigation.navigate('test', {screen})
  }
  return (
    <Container style={[styles.viewCenter, styles.pad10]}>
      <Card>
        <View style={styles.alignCenter}>
          <Button onPress={() => handleButton('Documents')}>
            <Text>Documents</Text>
          </Button>
          <Button onPress={() => handleButton('LiveClass')}>
            <Text>LiveClass</Text>
          </Button>
          <Button onPress={() => handleButton('Assignments')}>
            <Text>Assignments</Text>
          </Button>
          <Button onPress={() => handleButton('Lectures')}>
            <Text>Lectures</Text>
          </Button>
          <Button onPress={() => handleButton('Quiz')}>
            <Text>Quiz</Text>
          </Button>
          <Button onPress={() => handleButton('Assesment')}>
            <Text>Assesment</Text>
          </Button>
          <Button onPress={() => handleButton('Circular')}>
            <Text>Circular</Text>
          </Button>
          <Button onPress={() => handleButton('Messages')}>
            <Text>Messages</Text>
          </Button>
          <Button onPress={() => handleButton('Result')}>
            <Text>Result</Text>
          </Button>
          <Button onPress={() => handleButton('Attendance')}>
            <Text>Attendance</Text>
          </Button>
          <Button onPress={() => handleButton('Leave')}>
            <Text>Attendance</Text>
          </Button>
        </View>
      </Card>
    </Container>
  )
}
