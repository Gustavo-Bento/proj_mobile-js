import React from 'react'
import {View, Text } from 'react-native'
import Estilo from './estilo'

export default ({num = 0}) => {
    return(
      <View>
        <Text style={Estilo.txtS}>O resultado é:</Text>
        <Text style={Estilo.txtG}>
          {num % 2 === 0 ? 'Par' : 'Impar'}
        </Text>
      </View>
    )
}