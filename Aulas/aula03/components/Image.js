import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default ()=>(
  <Image style={style.img} source={require('../assets/logo.jpg')}/>
)

const style = StyleSheet.create(
  {
    img:{
      width: '128px',
      height: 'auto',
      borderRadius: 20,
      backgroundColor: '#606060',
    }
  }
);