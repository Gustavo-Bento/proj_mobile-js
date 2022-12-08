import {Text} from 'react-native'

import Estilo from './estilo'

export default (props) =>{
  let {min, max} = props
  min +=10
  max +=20
  const delta = max - min + 1
  const aleatorio = parseInt(Math.random() * delta) + min
  return (
    <Text style={Estilo.txtG}>
    O valor aleatorio é {aleatorio}
    </Text>
  )
}