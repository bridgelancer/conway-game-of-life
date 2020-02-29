import React from 'react'

const TimerDisplay = (props: any) => {
  const { cycle } = props

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
