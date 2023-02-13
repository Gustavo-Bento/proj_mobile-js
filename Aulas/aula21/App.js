import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DigiteSeuNome from './components/DigiteseuNome'
//Renderizando listas
export default() => (
  <SafeAreaView style={style.App}>
    <DigiteSeuNome />
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