import React from 'react'
import { Stage, Layer } from 'react-konva';

import { Button, Icon } from 'semantic-ui-react';
import Table from '../Table/'
import Toolbar from '../Toolbar'

import { useTableStateHook } from './hooks'
import { KonvaStageCSS } from './styles'

// Render canvas element to display the board
const KonvaStage = () => {
  const {
    board,
    handleBoardChange,
    handleCellPlacement,
    handleClearSelected,
    mapToolbarPatternToHandlers
  } = useTableStateHook()

  return (
    <KonvaStageCSS>
      <Stage width={1000} height={550} id="stage" style={
        {
          border: 'solid',
          padding: '1rem',
          borderRadius: '2rem'
        }
      }>
        <Layer>
          <Table board={board} handleBoardChange={handleBoardChange}/>
        </Layer>
      </Stage>
      <Button
        primary
        animated="fade"
        onClick={handleCellPlacement}
      >
        <Button.Content visible>Place cells </Button.Content>
        <Button.Content hidden><Icon name='arrow up' /> </Button.Content>
      </Button>
      <Button
        primary
        animated="fade"
        onClick={handleClearSelected}
      >
        <Button.Content visible>Clear selected</Button.Content>
        <Button.Content hidden><Icon name='times' /> </Button.Content>
      </Button>
      <Toolbar
        mapToolbarPatternToHandlers={mapToolbarPatternToHandlers}
      />
    </KonvaStageCSS>
  )
}

export default KonvaStage
