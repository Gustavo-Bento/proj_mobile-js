import React from 'react'
import {Button,Alert,Text} from 'react-native'
import Estilo from './estilo'

export default props =>{
  const executar = () => {
    Alert.alert(
      'Exec #01 !!!'
    )
  }

  return (
    <>
      <Button 
        title = "Executar #01!"
        onPress={executar}
        style={Estilo.obj}
      />
    </>
  )
}