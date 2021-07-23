import {Card, Container, Text, Button} from 'native-base'
import React from 'react'
import {View} from 'react-native'
import styles from '../../css/App.scss'

export default function Dashboard({navigation}) {
  console.log(navigation)
  
  const handleButton = screen => {
    navigation.navigate('Home', {screen})
  }
  return (
    <Container>
      <Container style={[styles.viewCenter, styles.pad10]}>
        <Card>
          <View style={styles.alignCenter}>
            <Button success onPress={() => handleButton('Study Material')}>
              <Text>Documents</Text>
            </Button>
            <Button warning onPress={() => handleButton('Live Classes')}>
              <Text>LiveClass</Text>
            </Button>
            <Button onPress={() => handleButton('Assignment')}>
              <Text>Assignments</Text>
            </Button>
            <Button onPress={() => handleButton('Video Lectures')}>
              <Text>Lectures</Text>
            </Button>
            <Button onPress={() => handleButton('Quiz')}>
              <Text>Quiz</Text>
            </Button>
            <Button onPress={() => handleButton('Assesment')}>
              <Text>Assesment</Text>
            </Button>
            <Button onPress={() => handleButton('Circulars')}>
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
          </View>
        </Card>
      </Container>
    </Container>
  )
}
