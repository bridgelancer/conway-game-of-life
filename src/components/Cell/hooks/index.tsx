import { useState } from 'react'

export const DEFAULT_COLOR = 'white'
export const HIGHLIGHT_COLOR = 'grey'
export const SELECTED_COLOR = 'red'

export const useCellStatesHook = (props: any) => {
  const { color: defaultColor, fixed, row, column, handleBoardChange} = props;

  const [color, setColor] = useState(defaultColor)
  const [selected, setSelected] = useState(false)

  const checkNotFixedAndSelected = () => {
    return !selected && !fixed
  }

  const handleMouseEnter = (() => {
    if (checkNotFixedAndSelected()){
      setColor(HIGHLIGHT_COLOR)
    }
  })

  const handleMouseLeave = (() => {
    if (checkNotFixedAndSelected()){
      setColor(DEFAULT_COLOR)
    }
  })

  const handleClick = () => {
    if(!fixed) {
      if (!selected) {
        setColor(SELECTED_COLOR)
      } else {
        setColor(DEFAULT_COLOR)
      }
      handleBoardChange(row, column, 'selected', !selected)
      setSelected(!selected)
    }
  }

  return {
    color,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
  }
}
