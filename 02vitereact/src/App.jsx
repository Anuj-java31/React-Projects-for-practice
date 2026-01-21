import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  const obj={
    name: 'Anuj',
    channel: "anujsingh31"
  }
  const arr=[1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-7'>Tailwind Test</h1>
      <Card channel='carryminati' username='Ajey Nagar' someObj = {obj} someArr={arr}/>
      <Card channel='anujsingh31'/>
    </>
  )
}

export default App
