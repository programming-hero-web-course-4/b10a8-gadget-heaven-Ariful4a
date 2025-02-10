import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Root from './Components/Roots/Root'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold underline mt-10 '>Assignment 8</h1>
        <Root></Root>
      </div>
    </>
  )
}

export default App
