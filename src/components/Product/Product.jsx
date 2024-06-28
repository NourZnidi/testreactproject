import React, { useState } from 'react'
import Count from '../Count/Count'

export default function Product() {

  const [one,setOne] =  useState('Fuck you')
  return (
    <div><Count user={one}/></div>
  )
}
