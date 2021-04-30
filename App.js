import React from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './src/layouts/Login';
import AppLoader, {loaderRef} from './src/common/AppLoader';

const App = () => {
  return (
    <View style={styles.container}>
      <AppLoader ref={loaderRef} />
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
