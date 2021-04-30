import {Button, Card, Container, Form, Input, Item, Text} from 'native-base';
import React, {useState} from 'react';
import {View, Image} from 'react-native';
import logo from '../../logos/eduguruji.png';
import styles from '../css/App.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container style={styles.pad10}>
      <Card style={styles.vtCenter}>
        <View style={styles.alignCenter}>
          <Image source={logo} />
        </View>
        <Form style={styles.pad20}>
          <Item>
            <Input placeholder="Email" />
          </Item>
          <Item>
            <Input placeholder="Password" />
          </Item>
          <View style={styles.mgTop30}>
            <Button success full>
              <Text> Login </Text>
            </Button>
          </View>
        </Form>
      </Card>
    </Container>
  );
}
