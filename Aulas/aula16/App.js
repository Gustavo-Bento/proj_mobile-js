import React from 'react'
import { SafeAreaView, View, Text,StyleSheet } from 'react-native'
import ParImpar from './components/ParImpar'

export default()=>(
  <SafeAreaView style={style.App}>
      <ParImpar num={13}/>
  </SafeAreaView>
)

const style=StyleSheet.create({
  App:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#000',
    color: 'white'
  }
})