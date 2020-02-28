// Hooks for handling mounting and unmounting of the React App
import { useState, useContext, useEffect } from 'react';
import SocketContext from '../utils/sockets/socket-context';

const broadcastConfirmation = (socket: SocketIOClient.Socket, setConnected: any) => {
  socket.on('confirm connect', () => {
    socket.emit('my broadcast event', {'data': `Echo hi from ${socket.id}`})
    setConnected(true)
  })
}

const receiveResponse = (socket: SocketIOClient.Socket) => {
    console.log(socket, 'receive response');
    socket.on('my response', (event: any) => console.log(event.data))
}

const handleSocketChange = (socket: SocketIOClient.Socket) => {
    console.log('socket change');
}

export const useConfirmConnectionHook = () => {
  const s = useContext(SocketContext)
  const [connected, setConnected] = useState(false)
  const { socket } = s

  useEffect(
    () => {
      broadcastConfirmation(socket, setConnected)
      receiveResponse(socket)
      return handleSocketChange(socket)
    }, [socket]
  )

  return {
    connected,
  }
}
