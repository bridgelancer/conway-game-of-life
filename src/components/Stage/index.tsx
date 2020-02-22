import React from 'react'
import { Stage, Layer } from 'react-konva';

import { Button } from 'semantic-ui-react';
import Table from '../Table/'

import { useTableStateHook } from './hooks'

// Render canvas element to display the board
const KonvaStage = () => {
  const { board, handleBoardChange, handleCellPlacement } = useTableStateHook()

  return (
    <>
      <Stage width={window.innerWidth} height={window.innerHeight-200}>
        <Layer>
          <Table board={board} handleBoardChange={handleBoardChange}/>
        </Layer>
      </Stage>
      <Button
        onClick={handleCellPlacement}
      >
        Place cells
      </Button>
    </>
  )
}

export default KonvaStage
