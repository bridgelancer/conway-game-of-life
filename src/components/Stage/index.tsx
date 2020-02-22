import React from 'react'
import { Stage, Layer } from 'react-konva';

import Table from '../Table/'

const KonvaStage = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerWidth}>
      <Layer>
        <Table />
      </Layer>
    </Stage>
  )
}

export default KonvaStage
