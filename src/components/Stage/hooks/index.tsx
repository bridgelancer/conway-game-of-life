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

const onBoardUpdate = (soc: SocketIOClient.Socket, callback: any) => {
  soc.on('boardUpdated', callback)
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
      onBoardUpdate(socket, handleExternalBoardUpdate)
    }, [socket]
  )

  const handleExternalBoardUpdate = (boardString: string) => {
    const { data: updatedBoard } = JSON.parse(boardString)
    setBoard((state: any) => {
      return updatedBoard
    })
  }


  const handleCellPlacement = () => {
    // make all the cells to turn from selected to fixed
    const convertedBoard = (board: any) => board.map(
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
    socket.emit('boardUpdate', JSON.stringify({data: convertedBoard(board)}))
  }

  return {
    board,
    setBoard,
    handleBoardChange,
    handleCellPlacement,
    handleExternalBoardUpdate,
  }
}
