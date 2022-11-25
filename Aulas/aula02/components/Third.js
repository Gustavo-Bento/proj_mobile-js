import {View, StyleSheet} from 'react-native';

export default()=>(
  <View style={style.paragrafo}>
  O resultado é: {
      soma()
  }
  
  </View>
)

function soma(){
  x = 6
  y = 2
  res = x + y
  return res
}

const style = StyleSheet.create(
  {
    paragrafo: {
      padding: '5px 50px',
      color: 'white',
      fontSize: 14,
      backgroundColor:'grey',
      fontStyle: 'bold',
      margin: 5
    }
  }
)