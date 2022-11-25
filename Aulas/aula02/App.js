import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';

export default()=>(
  <View style={style.container}>
    <First/>
    <Second/>
    <Third/>
  </View>
)

const style = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    margin: 24,
    padding: 10,
    backgroundColor: 'black'
  }
})