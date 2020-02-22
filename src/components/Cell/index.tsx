import React from 'react'
import { Rect } from 'react-konva';

import { useCellStatesHook } from './hooks';

const Cell = (props: any) => {
  const { row, column } = props;

  const {
    color,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
  } = useCellStatesHook(props);

  return (
    <Rect
      x={11* (column+1)}
      y={11* (row+1)}
      width={10}
      height={10}
      fill={color}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

export default Cell
