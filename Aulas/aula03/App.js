import { View, StyleSheet } from 'react-native';

import Conteudo from './components/Conteudo';

export default function App() {
  return (
    <View style={style.container}>
    <Conteudo/>
  </View>
  )
}
  


const style = StyleSheet.create(
  {
    container:{
      justifyContent:'center',
      display:'flex',
      alignItems: 'center'
    }
  }
)