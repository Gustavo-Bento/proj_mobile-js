import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default props => {
  return(
    <View style = {style.Space}>
    <Button style = {style.Botao}
      title="+" 
      onPress={props.inc}
    />
    <Button style = {style.Botao}
      title="-" 
      onPress={props.dec}
    />
    </View>
  )
}
const style = StyleSheet.create({
  Space:{
    flexDirection: 'block'
  },
  Botao:{
    display: 'flex',
    margin: 2,
    padding: 5
  }
})