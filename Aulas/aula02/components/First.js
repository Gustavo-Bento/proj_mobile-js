import { Text, StyleSheet } from 'react-native';

export default ()=>(
  <Text style={style.paragrafo}>
    Olá
  </Text>
);

const style =StyleSheet.create(
  {
    paragrafo: {
      color: 'white',
      fontSize: 14,
      backgroundColor:'grey',
      padding:'5px 100px',
    }
  }
)