import React from 'react';

interface SocketInterface {
  socket: SocketIOClient.Socket,
}

const SocketContext = React.createContext(
  {} as SocketInterface
)
export default SocketContext;
