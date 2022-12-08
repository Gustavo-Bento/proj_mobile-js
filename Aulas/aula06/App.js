import {SafeAreaView} from 'react-native'

import Primeiro, {Segundo, Terceiro} from './components/Mult'
import Estilo from './components/estilo'

export default()=>(
  <SafeAreaView style={Estilo.App}>
    <Primeiro/>
    <Segundo/>
    <Terceiro/>
  </SafeAreaView>
)
  