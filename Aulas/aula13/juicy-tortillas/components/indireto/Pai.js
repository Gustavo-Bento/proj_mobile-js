import React, {useState} from 'react'
import Filho from './Filho'
import { Text } from 'react-native'
import Estilo from '../estilo'

export default props =>{
  
  const [texto, setText] = useState('')
  const [num, setNum] = useState(0)

  function exibirValor(numero, text){
    setNum(numero)
  }
  return(
    <>
      <Text style={Estilo.txtS}>
        {texto}Valor Aleatorio: {num}
      </Text>
      <Filho
        min={1}
        max={100}
        funcao={exibirValor}
      />
    </>
  )
}