import React from 'react'
import { Rect } from 'react-konva';

import { useCellStatesHook } from './hooks';

const Cell = () => {
  const {
    color,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
  } = useCellStatesHook()


  return (
    <Rect
      x={20}
      y={20}
      width={50}
      height={50}
      fill={color}
      shadowBlur={5}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

export default Cell
