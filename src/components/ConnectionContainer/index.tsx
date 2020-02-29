import React from 'react'

import ConnectionStatus from './components/ConnectionStatus'
import TimerDisplay from './components/TimerDisplay'

export const ConnectionContainer = () => {
  return (
    <div className="connectContainer">
      <ConnectionStatus />
      <TimerDisplay />
    </div>
  )
}

export default ConnectionContainer
