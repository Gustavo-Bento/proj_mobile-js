import React from 'react'
import Filho from './Filho'

export default props =>{
  let x = 14
  let y = 23
  return(
    <>
      <Filho a={x} b={y}/>
      <Filho a={x+23} b={y+14}/>
      <Filho a={x-23} b={y-14}/>
    </>
  )
}