import React from 'react'
import {
  Container,
  Text,
  Header,
  Body,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  View,
  Spinner
} from 'native-base'
import styles from '../css/App.scss'

const ContentList = ({data, dataId, dataColumns, handlePress}) => {
  if (data === null) {
    return (
      <View style={styles.viewCenter}>
        <Spinner color="green" />
      </View>
    )
  }
  return (
    <Container>
      <Content>
        <List>
          {data.length > 0 ? (
            data.map(item => {
              console.log(item)

              return (
                <ListItem
                  key={item[dataId]}
                  onPress={() => handlePress(item[dataId])}>
                  <Body>
                    {dataColumns.map(subItem => {
                      return <Text>{item[subItem]}</Text>
                    })}
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              )
            })
          ) : (
            <Text>Data content is not available</Text>
          )}
        </List>
      </Content>
    </Container>
  )
}

export default ContentList
