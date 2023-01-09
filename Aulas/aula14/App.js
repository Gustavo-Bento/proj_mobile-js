import React from 'react';
import {View, SafeAreaView,StyleSheet} from 'react-native'
;
import Contador from './components/contador/Contador'

export default()=>(
  <SafeAreaView style={style.App}>
    <View style={style.Space}>
      <Contador/>
    </View>
  </SafeAreaView>
)

const style=StyleSheet.create(
  {
    App:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#000'
    },
    Space:{
      marginVertical: 8,
      width:75
    }
  }
)