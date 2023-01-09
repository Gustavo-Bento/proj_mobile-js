import React from 'react';
import {View, SafeAreaView,StyleSheet} from 'react-native'
;
import Contador from './components/Contador'

export default()=>(
  <SafeAreaView style={style.App}>
    <View style={style.Space}>
      <Contador inicial={100} passo={25}/>
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