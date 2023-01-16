import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ParImpar from './components/ParImpar'

//Comunicação indireta
export default()=>(
  <SafeAreaView style={style.App}>
    <ParImpar num={13}/>
  </SafeAreaView>
  
)

const style=StyleSheet.create({
App:{
  flex:1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: '#000'
}
})