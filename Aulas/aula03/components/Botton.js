import * as React from 'react';
import {View, Text, StyleSheet } from 'react-native'

export default()=>(
  <View>
    <Text style={style.botao} onPress={
      ()=> Linking.openURL('http://microcamp.com.br')
      }
    >
    Começar</Text>
  </View>

)

const style = StyleSheet.create(
  {
    botao:{
      textDecorationLine:'none',
      marginTop: '0.7em',
      padding: '5px 15px',
      backgroundColor: '#08ba94',
      color: 'white',
      borderRadius: 20,
      fontSize: 14
    }
  }
)