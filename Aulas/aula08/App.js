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
    <Aleatorio min={5} max={10}/>
    <Aleatorio min={10} max={500}/>
  </SafeAreaView>
)