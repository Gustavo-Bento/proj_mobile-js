import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Estilo from '../estilo';

export default ({num}) =>{
  return (
    <View style = {style.Container}>
      <Text style={Estilo.txtS, style.Num}>
      {num}
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  Container:{
    height: 40,
    width: 40,
    backgroundColor: '#000',
    margin: 5,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 9
  },
  Num: {
    color: '#FFF',
    textAlign: "center",
    fontSize: 24,
  }
})