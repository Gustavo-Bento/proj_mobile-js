import React from 'react'
import { View, St } from 'react-native'

export default props => {
  return (
    <View style={{
      height: 20,
      width: 20,
      backgroundColor: props.cor || '#000'
    }}/>
  )
}