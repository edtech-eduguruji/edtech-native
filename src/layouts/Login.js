import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import logo from '../../logos/eduguruji.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // console.log('ff', logo);
  return (
    <View>
      <Image style={styles.image} source={logo} />
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <Button mode="contained" color="green">
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
