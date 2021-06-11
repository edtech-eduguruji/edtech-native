import React from 'react'
import styles from '../css/App.scss'
import {Header, Left, Body, Button, Icon, Title} from 'native-base'
import PropTypes from 'prop-types'

const CustomHeader = props => {
  return (
    <Header style={styles.primaryBg}>
      <Left>
        <Button onPress={() => props.navigation.openDrawer()} transparent>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>
    </Header>
  )
}

CustomHeader.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.object
}

export default CustomHeader
