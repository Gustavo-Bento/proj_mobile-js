import React from 'react';
import {View, SafeAreaView,StyleSheet} from 'react-native'
;
import Botao from './components/Botao'

export default()=>(
  <SafeAreaView style={style.App}>
    <View style={style.Space}>
      <Botao />
    </View>
  </SafeAreaView>
)

const style=StyleSheet.create(
  {
    App:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    Space:{
      marginVertical: 8
    }
  }
)