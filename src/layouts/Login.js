import {Button, Card, Container, Form, Input, Item, Text} from 'native-base';
import React, {useState} from 'react';
import {View, Image} from 'react-native';
import styles from '../css/App.scss';
import config from 'react-native-config';
import logos from '../../logos/Logos';
import LoginApi from '../apis/LoginApi';

export default function Login() {
  const [fields, setFields] = useState({});

  const handleLogin = () => {
    const {email, password} = fields;
    LoginApi.userLogin({t1: email, t2: password}).then(res => {
      console.log(res);
    });
  };

  const handleChangeField = (id, value) => {
    if (id) {
      setFields({...fields, [id]: value});
    }
  };

  return (
    <Container style={styles.pad10}>
      <Card style={styles.vtCenter}>
        <View style={styles.alignCenter}>
          <Image source={logos[config.LOGO]} />
        </View>
        <Form style={styles.pad20}>
          <Item>
            <Input
              nativeID="email"
              placeholder="Email"
              onChangeText={text => handleChangeField('email', text)}
            />
          </Item>
          <Item>
            <Input
              secureTextEntry
              placeholder="Password"
              onChangeText={text => handleChangeField('password', text)}
            />
          </Item>
          <View style={styles.mgTop30}>
            <Button success full onPress={handleLogin}>
              <Text> Login </Text>
            </Button>
          </View>
        </Form>
      </Card>
    </Container>
  );
}
