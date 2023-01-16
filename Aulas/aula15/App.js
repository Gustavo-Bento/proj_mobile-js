import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Diferenciar from './components/Diferenciar'

//Diferenciando Android de iOS
export default()=>(
  <SafeAreaView style={style.App}>
    <Diferenciar/>
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