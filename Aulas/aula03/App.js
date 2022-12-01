import { View, StyleSheet } from 'react-native';

import Conteudo from './components/Conteudo';

export default function App() {
  return (
    <View style={style.body}>
      <View style={style.container}>
        <Conteudo/>
      </View>
    </View>
  )
}
  


const style = StyleSheet.create(
  {
    container:{
      justifyContent:'center',
      display:'flex',
      alignItems: 'center'
    },
    body:{
      backgroundColor:'black',
      color: 'white',
      height: '100%'
    }
  }
)