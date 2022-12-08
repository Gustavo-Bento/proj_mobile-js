import { SafeAreaView, View, Text } from 'react-native'
import Estilo from './components/estilo'
import Aleatorio from './components/Aleatorio'

export default ()=>(
  <SafeAreaView style={Estilo.App}>
    <View style={Estilo.txtS}>
    <Text>
    Mostrando valor aleatório
    </Text>
    </View>
    <Aleatorio min={15} max={17}/>
    <Aleatorio min={12} max={19}/>
  </SafeAreaView>
)