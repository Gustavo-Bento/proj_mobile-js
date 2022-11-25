import { Text, StyleSheet } from 'react-native';

export default ()=>(
  <Text style={style.paragrafo}>
    O resultado é: {4 + 4}
  </Text>
);

const style =StyleSheet.create(
  {
    paragrafo: {
      padding: '5px 42px',
      color: 'white',
      fontSize: 14,
      backgroundColor:'red',
      fontStyle: 'bold',
      margin: 5
    }
  }
)