import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Mega from './components/mega/Mega'

//Flexbox V4
export default() => (
  <SafeAreaView style={style.App}>
    <Mega qtdeNumeros={12} />
  </SafeAreaView>
)
const style=StyleSheet.create({
App:{
  flex:1,
  justifyContent: "center",
  alignItems: "center",
}
})