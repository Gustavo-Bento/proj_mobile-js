import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default()=>(
  <View>
    <Text style={style.p}>
      Clique em começar para aprender! 👇
    </Text>
  </View>
)

const style = StyleSheet.create(
  {
    p:{
      fontFamily: 'Helvetica',
      backgroundColor: '#404040',
      color: 'white',
      display: 'block'
    }
  }
);