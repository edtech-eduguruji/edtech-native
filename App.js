import React from 'react';
import {StyleSheet, View} from 'react-native';
import ParentContainer from './src/layouts/ParentContainer';

const App = () => {
  return (
    <View style={styles.container}>
      <ParentContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
