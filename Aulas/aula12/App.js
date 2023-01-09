import React from 'react';
import {View, SafeAreaView,StyleSheet} from 'react-native'
;
import Pai from './components/direto/Pai'

export default()=>(
  <SafeAreaView style={style.App}>
    <View style={style.Space}>
      <Pai/>
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