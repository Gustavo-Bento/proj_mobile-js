  import React from 'react'
import {Text} from 'react-native'
import Estilo from '../estilo'

export default props => {
    return(
        <>
          <Text style={Estilo.txtS}>[Inicio] Membros da Familia</Text>
          {props.children}
          <Text style={Estilo.txtS}>[Fim] Membros da Familia</Text>
        </>
    )
}