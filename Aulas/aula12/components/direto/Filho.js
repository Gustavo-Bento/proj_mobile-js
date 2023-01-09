import React from 'react'
import {Text, View} from 'react-native'
import Estilo from '../estilo'

export default props => (
  <View>
    <Text style ={Estilo.txtG}>
      {props.a}
    </Text>
    <Text style ={Estilo.txtG}>
      {props.b}
    </Text>
  </View>
)