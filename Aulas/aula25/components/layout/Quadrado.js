import React from 'react'
import { View } from 'react-native'

export default props => {
  const lado = props.lado || 50
  return (
    <View style={{
      width: lado,
      height: lado,
      backgroundColor: props.cor || '#000'
    }}/>
  )
}