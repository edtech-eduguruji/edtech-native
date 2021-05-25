import React from 'react'
import {StyleSheet, Dimensions, View} from 'react-native'
import config from 'react-native-config'
import Pdf from 'react-native-pdf'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})

export default function PDFViewer({route}) {
  const {pdfSource} = route.params
  const source = {
    uri: config.APIURL + pdfSource,
    cache: true
  }

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`)
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`)
        }}
        onError={error => {
          console.log(error)
        }}
        onPressLink={uri => {
          console.log(`Link presse: ${uri}`)
        }}
        style={styles.pdf}
      />
    </View>
  )
}
