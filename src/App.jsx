import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <>
      <p>Log in with Appwrite</p>
    </>
  )
}

export default App
