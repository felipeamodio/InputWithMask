import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Input from './src/components/Input';
import Logo from './src/components/Logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Input />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
