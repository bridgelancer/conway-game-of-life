import React, { useState } from 'react'

import { Rect } from 'react-konva';
import Konva from 'konva';

const Cell = () => {
  const [color, setColor] = useState('green')
  const [selected, setSelected] = useState(false)

  const handleMouseEnter = (() => {
    if (!selected){
      setColor('darkGreen')
    }
  })

  const handleMouseLeave = (() => {
    if (!selected){
      setColor('green')
    }
  })

  const handleClick = () => {
    if (!selected) {
      setColor('red')
    } else {
      setColor('green')
    }
    setSelected(!selected)
  }

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
