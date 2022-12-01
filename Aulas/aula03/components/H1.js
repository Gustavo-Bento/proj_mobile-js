import * as React from 'react';
import {View, Text, StyleSheet } from 'react-native'

export default()=>(
  <View>
    <Text style={style.h1}>
      Seja bem vindo!
    </Text>
  </View>
)

const style = StyleSheet.create(
  {
    h1:{
      fontSize: 'x-large',
      backgroundColor: '#606060',
      color: 'white',
      display: 'block',
      margin: '0.67em'
    },
  }
);