import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import UsuarioLogado from './components/UsuarioLogado'
//Comunicação indireta
export default() => (
  <SafeAreaView style={style.App}>
    <UsuarioLogado usuario={  {nome: 'Gu', email: 'gfmb94@gmail.com'}  }/>
    <UsuarioLogado usuario={  {nome: 'MUrilo',}  }/>
    <UsuarioLogado usuario={  {email: 'mfmb@gmail',}  }/>
    <UsuarioLogado usuario={null} />
    <UsuarioLogado usuario={{}} />
    <UsuarioLogado usuario={  {nome: 'Lilo', email: 'mfmb@gmail.com'}  }/>
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