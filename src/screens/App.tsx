import React, { useEffect, useContext } from 'react';

import SocketContext from '../utils/sockets/socket-context';
import logo from '../static/logo.svg';
import '../styles/App.css';

function App() {
  const s = useContext(SocketContext);

  useEffect(
    () => {
      s.socket.on('connect', () => {
        s.socket.emit('my event', {'data': 'hi'})

      })
      s.socket.on('connect', () => {
        s.socket.emit('my event', {'data': 'hi'})
      })
      s.socket.on('my response', (event: any) => console.log(event.data))
    }, [s.socket]
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
