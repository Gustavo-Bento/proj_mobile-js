import {SafeAreaView, StyleSheet} from 'react-native'

import Comp1, {Comp2, Comp3} from './components/Mult'

export default ()=>(
  <SafeAreaView style={style.App}>
    <Comp1/>
    <Comp2/>
    <Comp3/>
  </SafeAreaView>
)

const style = StyleSheet.create({
  App:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})