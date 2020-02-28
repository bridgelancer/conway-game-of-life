import React from 'react'
import { ToolbarCSS } from './styles'

import { ReactComponent as BlockImage } from 'src/static/block.svg'
import { ReactComponent as BeehiveImage } from 'src/static/beehive.svg'
import { ReactComponent as BlinkerImage } from 'src/static/blinker.svg'
import { ReactComponent as BeaconImage } from 'src/static/beacon.svg'
import { ReactComponent as LoafImage } from 'src/static/loaf.svg'
import { ReactComponent as TubImage } from 'src/static/tub.svg'
import { ReactComponent as BoatImage } from 'src/static/boat.svg'

const Toolbar = (props: any) => {
  const { mapToolbarPatternToHandlers } = props

  const handleBlockInput = mapToolbarPatternToHandlers['block']
  const handleBeehiveInput = mapToolbarPatternToHandlers['beehive']
  const handleBlinkerInput = mapToolbarPatternToHandlers['blinker']
  const handleBeaconInput = mapToolbarPatternToHandlers['beacon']
  const handleLoafInput = mapToolbarPatternToHandlers['loaf']
  const handleTubInput = mapToolbarPatternToHandlers['tub']
  const handleBoatInput = mapToolbarPatternToHandlers['boat']

  return (
    <ToolbarCSS>
      <BlinkerImage onClick={handleBlinkerInput} />
      <BlockImage onClick={handleBlockInput} />
      <BeehiveImage onClick={handleBeehiveInput} />
      <BeaconImage onClick={handleBeaconInput} />
      <LoafImage onClick={handleLoafInput} />
      <BoatImage onClick={handleBoatInput} />
    </ToolbarCSS>
  )
}

export default Toolbar
