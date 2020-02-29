import React from 'react'
import { Helmet } from 'react-helmet'
import Media from 'react-media'
import 'semantic-ui-css/semantic.min.css'
import '../styles/App.css'

import Stage from '../components/Stage'
import ConnectionContainer from 'src/components/ConnectionContainer'

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <link rel="icon" href="/block.svg" />
        <title> Conway GoL </title>
      </Helmet>
      <header className="App-header">
        <p>
          Conway's Game of Life
        </p>
        <Media query="(min-width: 1024px)" render ={() =>(
          <>
            <Stage />
            <ConnectionContainer />
          </>
        )}
        />
        <Media query="(max-width: 1023px)" render ={() =>(
          <p> Currently unsupported for mobile devices </p>
        )}
        />
      </header>
    </div>
  )
}

export default App
