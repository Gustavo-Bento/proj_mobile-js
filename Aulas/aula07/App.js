import {SafeAreaView, Text,  StyleSheet} from 'react-native'

import MinMax from './components/MinMax'

export default()=>(
  <SafeAreaView style={style.App}>
    <MinMax max={3} min={2}/>
    <MinMax max="4" min="2"/>
  </SafeAreaView>
)

const style=StyleSheet.create({
  App:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})