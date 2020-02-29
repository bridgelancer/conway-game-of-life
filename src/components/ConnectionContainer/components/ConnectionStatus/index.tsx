import React from 'react'

const ConnectionStatus = (props: any) => {
  const { connected } = props

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
