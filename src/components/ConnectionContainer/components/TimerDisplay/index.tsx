import React from 'react'
import { useConfirmConnectionHook } from 'src/screens/hooks'

const TimerDisplay = () => {
  const { cycle }: any = useConfirmConnectionHook()

  if (typeof(cycle) === 'undefined')
    return <></>
  else
    return (
      <p className="connectStatus">
        Refresh cycle: {cycle} {cycle > 1 ? "seconds" : "second"}
      </p>
    )
}

export default TimerDisplay
