import React from 'react'
import { Stage, Layer } from 'react-konva';

import { Button } from 'semantic-ui-react';
import Table from '../Table/'
import Toolbar from '../Toolbar'

import { useTableStateHook } from './hooks'

// Render canvas element to display the board
const KonvaStage = () => {
  const { board, handleBoardChange, handleCellPlacement, handleBlockInput } = useTableStateHook()

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
    <Toolbar
      handleBlockInput={handleBlockInput}
    />
    </>
  )
}

export default KonvaStage
