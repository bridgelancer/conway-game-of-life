import { useState } from 'react'
import * as R from 'ramda'

import { useContext, useEffect } from 'react';
import SocketContext from '../../../utils/sockets/socket-context';

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

const logBoardUpdate = (socket: SocketIOClient.Socket) => {
  socket.on('boardUpdated', (event: any) => {
    console.log('hi update')
  })
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

  const s = useContext(SocketContext)
  const { socket } = s

  useEffect(
    () => {
      logBoardUpdate(socket)
    }, [socket]
  )

  const handleCellPlacement = () => {
    // make all the cells to turn from selected to fixed
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
    // send a request
    console.log(JSON.stringify({data: board}))
    socket.emit('boardUpdate', JSON.stringify({data: board}))
  }

  return {
    board,
    setBoard,
    handleBoardChange,
    handleCellPlacement,
  }
}
