import { useState } from 'react'
import * as R from 'ramda'

import { cellState } from '../../types'

const ROWS = 50
const COLUMNS = 100

const DEFAULT_COLOR = 'white'

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

  const handleBoardChange = (row: number, column: number, attr: string, value: any) => {

    setBoard(
      state => {
        return R.set(R.lensPath([row, column, attr]), value, state)
      }
    )
  }

  const handleCellPlacement = () => {
    // make all the cells to turn from selected to fix
    console.log(board, 'in handle cell placement')
    const convertedBoard = (state: any) => state.map(
      (row: cellState[]) =>
        row.map(
          (cell: cellState) => {
            if (cell.selected) {
              cell.color = 'black'
              cell.fixed = true
            }
            return cell
          }
      )
    )

    setBoard(convertedBoard)
    console.log('converted board', board)
    // send a request
  }

  return {
    board,
    setBoard,
    handleBoardChange,
    handleCellPlacement,
  }
}
