import {Text} from 'react-native'

import Estilo from './estilo'

function Comp1(){
  return <Text>Componte Oficial</Text>
}
function Comp2(){
  return <Text style={Estilo.txtG}>First Component</Text>
}
function Comp3(){
  return <Text style={Estilo.txtS}>Por Gustavo Ferreira</Text>
}

export default Comp1
export {Comp2, Comp3}