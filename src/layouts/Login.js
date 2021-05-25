import {Button, Card, Container, Form, Input, Item, Text} from 'native-base'
import React, {useState} from 'react'
import {View, Image} from 'react-native'
import config from 'react-native-config'
import styles from '../css/App.scss'
import logos from '../../logos/Logos'
import LoginApi from '../apis/LoginApi'
import LocalStorage from '../common/LocalStorage'
import {addErrorMsg} from '../utils/Utils'
import {AuthContext} from '../../App'

export default function Login({navigation}) {
  const {signIn, setLoading} = React.useContext(AuthContext)
  const [fields, setFields] = useState({})

  const handleLogin = () => {
    const {email, password} = fields
    setLoading()
    LoginApi.userLogin({t1: email, t2: password})
      .then(response => {
        if (response && response.status === 200 && response.data.length > 0) {
          const user = response.data[0]
          if (JSON.parse(config.ROLES).includes(user.role)) {
            return user
          } else {
            throw new Error('Login details are invalid.')
          }
        }
      })
      .then(async user => {
        if (user) {
          LocalStorage.setUser(user)
          signIn(user)
        }
      })
      .catch(err => {
        addErrorMsg(err.message)
      })
  }

  const handleChangeField = (id, value) => {
    if (id) {
      setFields({...fields, [id]: value})
    }
  }

  return (
    <Container style={[styles.viewCenter, styles.pad10]}>
      <Card>
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
  )
}
