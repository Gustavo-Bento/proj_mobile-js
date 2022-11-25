import { View, StyleSheet } from 'react-native';

import H1 from './H1';
import P from './P';
import Link from './Link';

export default() => (
    <View style={style.conteudo}>
      <H1/>
      <P/>
      <Link/>
  </View>
)

const style = StyleSheet.create(
  {
    conteudo:{
      width: 480,
      padding: 'w.5px 10px',
      textAlign: 'center',
      marginTop: '10%'
    }
  }
)