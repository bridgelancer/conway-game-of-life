// Hooks for handling mounting and unmounting of the React App

import { useContext, useEffect } from 'react';
import SocketContext from '../utils/sockets/socket-context';

const broadcastConfirmation = (socket: SocketIOClient.Socket) => {
  socket.on('confirm connect', () => {
    socket.emit('my broadcast event', {'data': `Echo hi from ${socket.id}`})
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
  const { socket } = s

  useEffect(
    () => {
      broadcastConfirmation(socket)
      receiveResponse(socket)
      return handleSocketChange(socket)
    }, [socket]
  )
}
