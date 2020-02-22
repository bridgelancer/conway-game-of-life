import React, { useEffect } from 'react';
import io from 'socket.io-client';
import logo from '../static/logo.svg';
import '../styles/App.css';

function App() {
  useEffect(
    () => {
      const socket = io('http://127.0.0.1:5000/test', {transports: ['websocket']})
      socket.on('connect', () => {
        socket.emit('my event', {'data': 'hi'})

      })
      socket.on('connect', () => {
        socket.emit('my event', {'data': 'hi'})

      })
      socket.on('my response', (event: any) => console.log(event.data))
    }, []
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
