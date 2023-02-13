import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import Estilo from './estilo';

export default (props) => {
  const [nome, setNome] = useState('Nome');
  return (
    
    <View>
    <Text style={Estilo.txtS}>{nome}</Text>
      <TextInput
        style={Estilo.txtG}
        placholder="Digite seu Nome"
        value={nome}
        onChangeText={(nome) => setNome(nome)}
      />
    </View>
  );
};
