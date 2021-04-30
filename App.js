import React from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './src/layouts/Login';

const App = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
