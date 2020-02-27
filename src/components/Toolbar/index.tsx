import React from 'react'
import { Button } from 'semantic-ui-react'

const Toolbar = (props: any) => {
  const { mapToolbarPatternToHandlers } = props

  const handleBlockInput = mapToolbarPatternToHandlers['block']
  const handleBeehiveInput = mapToolbarPatternToHandlers['beehive']
  const handleBlinkerInput = mapToolbarPatternToHandlers['blinker']
  const handleToadInput = mapToolbarPatternToHandlers['toad']

  return (
    <>
      <Button
        onClick={handleBlockInput}
      >
        Block
      </Button>
      <Button
        onClick={handleBeehiveInput}
      >
        Beehive
      </Button>
      <Button
        onClick={handleBlinkerInput}
      >
        Blinker
      </Button>
      <Button
        onClick={handleToadInput}
      >
        Toad
      </Button>
    </>
  )}

export default Toolbar
