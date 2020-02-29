import React from 'react'
import { Rect } from 'react-konva';

import { useCellStatesHook } from './hooks';

const CELL_SIDE_LENGTH = 10
const BORDER_WIDTH = 1

const Cell = (props: any) => {
  const { row, column } = props;
  const {
    color,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
  } = useCellStatesHook(props);

    ;
  return (
    <>
      <Rect
        x={(CELL_SIDE_LENGTH+BORDER_WIDTH)* (column)}
        y={(CELL_SIDE_LENGTH+BORDER_WIDTH)* (row)}
        width={CELL_SIDE_LENGTH}
        height={CELL_SIDE_LENGTH}
        fill={color}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </>
  );
}

export default Cell
