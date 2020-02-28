import React from 'react'
import { Rect } from 'react-konva';

import { useCellStatesHook, DEFAULT_COLOR } from './hooks';

const CELL_SIDE_LENGTH = 10
const HIGHLIGHT_MARGIN = 2.5
const BORDER_WIDTH = 1

const Cell = (props: any) => {
  const { row, column } = props;
  const {
    color,
    highlighted,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
  } = useCellStatesHook(props);

  if (highlighted) {
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
        <Rect
          x={(CELL_SIDE_LENGTH+BORDER_WIDTH)*(column) + HIGHLIGHT_MARGIN}
          y={(CELL_SIDE_LENGTH+BORDER_WIDTH)*(row) + HIGHLIGHT_MARGIN}
          width={CELL_SIDE_LENGTH-(2*HIGHLIGHT_MARGIN)}
          height={CELL_SIDE_LENGTH-(2*HIGHLIGHT_MARGIN)}
          fill={DEFAULT_COLOR}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </>
    );
  }

  return (
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
  );
}

export default Cell
