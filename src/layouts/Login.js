import { Button, Card, Container, Form, Input, Item, Text } from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import logo from '../../logos/eduguruji.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container style={styles.container}>
      <Card style={styles.card}>
       <View style={styles.imgContainer}>
      <Image source={logo} />
      </View>

 <Form style={styles.formContainer}>
 <Item>
   <Input placeholder='Email'/>
   </Item>
   <Item>
   <Input placeholder='Password'/>
   </Item>
<View style={styles.loginBtn}>
   <Button success full><Text> Login </Text></Button>
   </View>
   
   </Form>
   </Card>
     
    </Container>
  );
}

const styles = StyleSheet.create({
  container:{
   padding: 10
  },
  card: {
    marginTop:'40%',
  },
  imgContainer:{
    marginBottom: 30,
    alignItems: 'center'
  },
  formContainer:{
    padding: 20,
    marginBottom: 40
  },
  loginBtn:{
    marginTop: 50,
  } 
});
