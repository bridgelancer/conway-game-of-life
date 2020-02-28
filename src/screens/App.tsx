import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../styles/App.css'
import Stage from '../components/Stage'

import { useConfirmConnectionHook } from './hooks'

const App = () => {
  const { connected } = useConfirmConnectionHook();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Conway's Game of Life
        </p>
        <Stage />
        <p className="connectStatus">
          App status: {
            connected
            ? <b>connected</b>
            : <b>not connected</b>
          }
        </p>
      </header>
    </div>
  )
}

export default App
