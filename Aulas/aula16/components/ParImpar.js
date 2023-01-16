import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './Estilo'

export default ({num = 0}) => {
  return(
    <View>
      <Text>O resultado é:</Text>
      <Text>
        {num % 2 === 0 ? 'Par' : 'Impar'}
      </Text>
    </View>
    )
}