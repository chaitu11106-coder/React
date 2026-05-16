import React from 'react'
import Card from './Components/Card'
import './index.css'


export const App = (Raju) => {
  
  return (
    <div className='parent'>
      
      <Card user='Aman' age ='18'/> 
      <Card user='Shri' age ='28'/>
    </div>
  )
}
export default App
