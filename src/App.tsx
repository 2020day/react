import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  function onClick() {
    setCount((count) => count + 1)
    alert('You clicked me!')
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>测试一下</h1>
      <div className="card">
        <button className='color-#943ea2 bg-red' onClick={() => {onClick()}}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
