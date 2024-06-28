import Style from './Nour.module.css'
import { useState } from 'react'


export default function Nour() {
const[DarkTheme,setDarkTheme]=useState(false)


const themes={
LightTheme:{
backgroundColor:'black',
color:'white',
padding :'20px'
},
DarkTheme:{
  backgroundColor:'white',
  color:'black',
  padding :'20px'

}


}


  return (
<>
enable themes
<input type='checkbox' onChange={() => { 
setDarkTheme(prevTheme => !prevTheme)


 }}></input>
<div style={DarkTheme ? themes.DarkTheme: themes.LightTheme}>
<h1>Hello everyBody</h1>
<p>this is me </p>
</div>

</>
  )
}


