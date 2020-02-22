import { useState } from 'react'

const ROWS = 50
const COLUMNS = 100

const DEFAULT_COLOR = 'white'

interface cellState {
  color: string
  fixed: boolean
}

const defaultBoard: cellState[][] = []
const DEFAULT_CELL_STATE = {color: DEFAULT_COLOR, fixed: false, selected: false}

for (let r = 0; r < ROWS; r++){
  defaultBoard.push([])
  for (let c = 0; c < COLUMNS; c++) {
    // initialize colours and pass into Cell
    defaultBoard[r].push(DEFAULT_CELL_STATE)
  }
}

export const useTableStateHook = () => {
  const [board, setBoard] = useState(defaultBoard)

  return {
    board,
    setBoard,
  }
}
