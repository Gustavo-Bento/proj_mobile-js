import * as React from 'react';
import {View, Link, StyleSheet } from 'react-native'

import Image from './Image'

export default()=>(
  <View>
    <Link href="microcamp.com.br" style={style.cinza}>
      <Image/>
    </Link>
  </View>
)

const style = StyleSheet.create(
  {
    cinza:{
      backgroundColor: '#606060'
    }
  }
);