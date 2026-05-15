import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Component/card'
import Navbar from './Component/nav'
import Hero from './Component/hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Card />
      <Navbar/>
      <Hero/>
    </div>
     
  )
}

export default App
