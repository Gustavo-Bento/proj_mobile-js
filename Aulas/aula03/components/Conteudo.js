import { View, StyleSheet, Image } from 'react-native';

import H1 from './H1'
import P from './P'
import Botton from './Botton'

export default() => (
  <View style={style.conteudo}>
    <View style={style.container}>
      <Image style={style.logo} source={require('../assets/logo.jpg')}/>
      <H1/>
      <P/>
    </View>
    <Botton/>
  </View>
)

const style = StyleSheet.create(
  {
    conteudo:{
      width:'80%',
      padding: '15px',
      textAlign: 'center',
      marginTop: '10%',
      backgroundColor: '#606060',
      borderRadius: 20
    },
    logo:{
      width: 128,
      height: 128,
      borderRadius: 20
    },
    container:{
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
)