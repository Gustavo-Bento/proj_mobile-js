import * as React from 'react';
import { SafeareaView, StyleSheet } from 'react-native';
import Diferenciar from './components/Diferenciar'

export default()=>(
    <SafeareaView style={style.App}>
     <Diferenciar/>
    </SafeareaView>
  )

const style = StyleSheet.create({
  App:{
    flex:1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#000"
  }
});
