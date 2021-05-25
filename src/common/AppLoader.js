import React from 'react'
import {Spinner} from 'native-base'
import {Modal, View} from 'react-native'
import styles from '../css/App.scss'

export const loaderRef = React.createRef()

export function showLoader() {
  const ref = loaderRef.current
  if (ref) {
    ref.showLoader()
  }
}

export function hideLoader() {
  const ref = loaderRef.current
  if (ref) {
    ref.hideLoader()
  }
}

class AppLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loader: false}
  }

  showLoader() {
    this.setState({loader: true})
  }

  hideLoader() {
    // this.setState({loader: false})
  }

  render() {
    const {loader} = this.state
    if (loader) {
      return (
        <View style={[styles.rel]}>
          <View style={[styles.viewCenter, styles.loaderscreen]}>
            <Spinner color="green" />
          </View>
        </View>
      )
    } else {
      return null
    }
  }
}

export default AppLoader
