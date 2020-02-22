import React from 'react'
import * as R from 'ramda'

import Cell from '../Cell/'

import { useTableStateHook } from './hooks'

interface cellState {
  color: string
  fixed: boolean
}

const Row = (props: any) => {
  const { row, rowIndex, handleBoardChange } = props;
  return (
    <>
      {
        row.map(
          (cell: any, colIndex: number) => {
            return <Cell {...cell} row={rowIndex} column={colIndex} handleBoardChange={handleBoardChange}/>
          }
        )
      }
    </>
  )
}

const Table = () => {
  const { board, setBoard } = useTableStateHook()

  const handleBoardChange = (row: number, column: number, attr: string, value: any) => {
    setBoard(
      R.set(R.lensPath([row, column, attr]), value, board)
    )
  }

  return (
    <>
      {
        board.map((row: cellState[], rowIndex: number) => {
          return <Row row={row} rowIndex={rowIndex} handleBoardChange={handleBoardChange}/>
        })
      }
    </>
  )
}

export default Table
