// Wrapper component for displaying connection status to backend
import React from 'react'

import ConnectionStatus from './components/ConnectionStatus'
import TimerDisplay from './components/TimerDisplay'

export const ConnectionContainer = (props: any) => {
  const { connected, cycle } = props
  return (
    <div className="connectContainer">
      <ConnectionStatus connected={connected}/>
      <TimerDisplay cycle={cycle}/>
    </div>
  )
}

export default ConnectionContainer
