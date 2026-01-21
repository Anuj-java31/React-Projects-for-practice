import { useState } from 'react'
import './App.css'
function App() {
  let [counter, setCounter] = useState(10);
  const addValue = () => {
    counter = counter + 1;
    if (counter > 20) {
      counter = 0;
    }
    setCounter(counter+1)
  }
  const removeValue = () => {
    counter = counter - 1;
    if (counter < 0) {
      counter = 0
    }
    setCounter(counter);
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h1>Counter Value {counter}</h1>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
