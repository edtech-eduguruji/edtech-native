import {Card, Container, Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import styles from '../../../css/App.scss';

export default function Quiz() {
  return (
    <Container style={[styles.viewCenter, styles.pad10]}>
      <Card>
        <View style={styles.alignCenter}>
          <Text>Quiz</Text>
        </View>
      </Card>
    </Container>
  );
}
