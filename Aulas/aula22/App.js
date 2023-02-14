import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Quadrado from './components/layout/Quadrado'

//Renderizando listas
export default() => (
  <SafeAreaView style={style.App}>
    <Quadrado />
    <Quadrado cor="#900"/>
    <Quadrado cor="#090"/>
    <Quadrado cor="#009"/>
  </SafeAreaView>
)

const style=StyleSheet.create({
App:{
  flex:1,
  justifyContent: "center",
  alignItems: "center",
}
})