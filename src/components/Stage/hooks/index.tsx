import { useState } from 'react'
import * as R from 'ramda'

import { useContext, useEffect } from 'react';
import SocketContext from '../../../utils/sockets/socket-context';

import { cellState } from '../../types'
import { SELECTED_COLOR } from '../../Cell/hooks'
import {
  block,
  beehive,
  blinker,
  toad,
} from './config'

const ROWS = 50
const COLUMNS = 100

const DEFAULT_COLOR = '#ffffff'

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

const onTick = (soc: SocketIOClient.Socket, callback: any) => {
  soc.on('tick', callback)
}

const checkEmpty = (board: any, r: number, c: number, numToCheck: number) => {
  for (let i=r; i<=r+numToCheck; i++)
    for (let j=c; j<c+numToCheck; j++){
      if (board[i][j].fixed || board[i][j].selected)
        return false
    }
  return true
}

export const useTableStateHook = () => {
  const [board, setBoard] = useState(defaultBoard)
  const handleBoardChange = (payload: any) => {
    const { row, column, color, selected } = payload

    const newCellState = { color, selected }

    setBoard(
      state => {
        return R.set(R.lensPath([row, column]), newCellState, state)
      }
    )
  }

  const s = useContext(SocketContext)
  const { socket } = s

  useEffect(
    () => {
      onBoardUpdate(socket, handleExternalBoardUpdate)
      onTick(socket, handleExternalBoardUpdate)
    }, [socket]
  )

  const handleExternalBoardUpdate = (boardString: string) => {
    const { data: updatedBoard } = JSON.parse(boardString)
    const convertBoard = (board: any) => updatedBoard.map(
      (row: cellState[], r: number) =>
        row.map(
          (cell: cellState, c: number) => {
            cell.selected = board[r][c].selected || false
            if (cell.selected && !cell.fixed) {
              cell.color = SELECTED_COLOR
            }
            return cell
          }
        )
      )
    setBoard(convertBoard)
  }

  const handleCellPlacement = () => {
    // refactor - consider use board color instead
    const convertBoard = (board: any) => board.map(
      (row: cellState[], r: number) =>
        row.map(
          (cell: cellState, c: number) => {
            if (cell.selected) {
              cell.fixed = true
            }
            delete cell.selected
            return cell
          }
      )
    )

    setBoard(convertBoard)
    const convertedBoard = convertBoard(board)

    // send a request
    socket.emit('boardUpdate', JSON.stringify({data: convertedBoard}))
  }

  const patternHandler = (pattern: any) => () => {
    const size = Math.max(...pattern.map(([r, c]: number[]) => {
      return Math.max(r, c)
    }))

    const r = Math.round(Math.random() * ((ROWS-1) - size))
    const c = Math.round(Math.random() * ((COLUMNS-1) - size))

    if (checkEmpty(board, r, c, size)) {
      const updatedBoard = R.clone(board)
      for (let i=r; i<=r+size; i++)
        for (let j=c; j<=c+size; j++){
          if (R.includes([i-r, j-c], pattern)) {
          updatedBoard[i][j].color = SELECTED_COLOR
          updatedBoard[i][j].selected = true
          }
        }

      setBoard(state => updatedBoard)
    }

    else {
      patternHandler(pattern)()
    }
  }

  const mapToolbarPatternToHandlers = {
    block: patternHandler(block),
    beehive: patternHandler(beehive),
    blinker: patternHandler(blinker),
    toad: patternHandler(toad),
  }

  return {
    board,
    setBoard,
    handleBoardChange,
    handleCellPlacement,
    handleExternalBoardUpdate,

    mapToolbarPatternToHandlers
  }
}
