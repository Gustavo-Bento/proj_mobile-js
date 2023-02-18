import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FlexboxV4 from './components/layout/FlexboxV4'

//Flexbox V4
export default() => (
  <SafeAreaView style={style.App}>
    <FlexboxV4 />
  </SafeAreaView>
)

const style=StyleSheet.create({
App:{
  flex:1,
  justifyContent: "center",
  alignItems: "center",
}
})