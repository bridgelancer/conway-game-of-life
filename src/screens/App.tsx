import React from 'react'

import '../styles/App.css'
import Stage from '../components/Stage'

import { useConfirmConnectionHook } from './hooks'

const App = () => {
  useConfirmConnectionHook();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Stage />
      </header>
    </div>
  )
}

export default App
