import React from 'react'
import { Helmet } from 'react-helmet'
import 'semantic-ui-css/semantic.min.css'
import '../styles/App.css'

import Stage from '../components/Stage'
import ConnectionContainer from 'src/components/ConnectionContainer'

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="An implementation of Conway's Game of Life" />
        <link rel="icon" href="/block.svg" />
        <title> Conway GoL </title>
      </Helmet>
      <header className="App-header">
        <p>
          Conway's Game of Life
        </p>
        <Stage />
        <ConnectionContainer />
      </header>
    </div>
  )
}

export default App
