import React from 'react'

import Cell from '../Cell/'
import { cellState } from '../types'

const Row = (props: any) => {
  const { row, rowIndex, handleBoardChange } = props;
  return (
    <>
      {
        row.map(
          (cell: any, colIndex: number) => {
            return (
              <Cell
                {...cell}
                key={colIndex}
                row={rowIndex}
                column={colIndex}
                handleBoardChange={handleBoardChange}
              />
            )
          }
        )
      }
    </>
  )
}

const Table = (props: any) => {
  const { board, handleBoardChange } = props;

  return (
    <>
      {
        board.map((row: cellState[], rowIndex: number) => {
          return (
            <Row
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              handleBoardChange={handleBoardChange}
            />
          )
        })
      }
    </>
  )
}

export default Table
