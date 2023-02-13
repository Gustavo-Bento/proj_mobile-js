import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ListaProdutos from './components/Produtos/ListaProdutos'

//Renderizando listas pt 2
export default() => (
  <SafeAreaView style={style.App}>
    <ListaProdutos/>
  </SafeAreaView>
)

const style=StyleSheet.create({
App:{
  flex:1,
  justifyContent: "center",
  alignItems: "center",
}
})