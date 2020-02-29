import React from 'react'
import { useConfirmConnectionHook } from 'src/screens/hooks'

const ConnectionStatus = () => {
  const { connected } = useConfirmConnectionHook()

  return (
    <p className="connectStatus">
      App status: {
        connected
          ? <b>connected</b>
          : <b>not connected</b>
      }
    </p>
  )
}

export default ConnectionStatus
