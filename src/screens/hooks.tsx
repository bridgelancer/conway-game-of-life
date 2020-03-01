// Hooks for handling socket connection status when App mounts
import { useState, useContext, useEffect } from 'react'
import SocketContext from '../utils/sockets/socket-context'

const broadcastConfirmation = (socket: SocketIOClient.Socket, setConnected: any, setCycle: any) => {
  socket.on('confirm connect', (event: any) => {
    socket.emit('my broadcast event', {'data': `Echo hi from ${socket.id}`})
    setConnected(true)
    setCycle(event.data.tickDuration)
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
  const [cycle, setCycle] = useState(undefined)

  const { socket } = s

  useEffect(
    () => {
      broadcastConfirmation(socket, setConnected, setCycle)
      receiveResponse(socket)
      return handleSocketChange(socket)
    }, [socket]
  )

  return {
    connected,
    cycle,
  }
}
