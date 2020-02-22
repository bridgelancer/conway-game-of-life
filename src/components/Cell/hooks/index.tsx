import { useState, useEffect } from 'react'

export const DEFAULT_COLOR = 'white'
export const HIGHLIGHT_COLOR = 'grey'
export const SELECTED_COLOR = 'red'

export const useCellStatesHook = (props: any) => {
  const { color: upstreamColor, selected: defaultSelect, fixed, row, column, handleBoardChange} = props;

  const [color, setColor] = useState(upstreamColor)
  const [selected, setSelected] = useState(defaultSelect)

  // Change Cell display to the one passed down on update
  useEffect(() => {
    setColor(upstreamColor)
    }, [upstreamColor]
  )

  // Remove selected state if the cell is fixed (by any user)
  useEffect(() => {
    if (fixed) {
      setSelected(false)
    }
  }, [fixed])

  const checkNotFixedAndSelected = () => {
    return !selected && !fixed
  }

  // Highlight cell on mouse enter
  const handleMouseEnter = () => {
    if (checkNotFixedAndSelected()){
      setColor(HIGHLIGHT_COLOR)
    }
  }

  // Revert to default color on mouse leave
  const handleMouseLeave = () => {
    if (checkNotFixedAndSelected()){
      setColor(DEFAULT_COLOR)
    }
  }

  // Only change state of cell and board if the cell is not fied
  const handleClick = () => {
    if(!fixed) {
      if (!selected) {
        setColor(SELECTED_COLOR)
        handleBoardChange(row, column, 'selected', true)
        setSelected(true)
      } else {
        setColor(DEFAULT_COLOR)
        handleBoardChange(row, column, 'selected', false)
        setSelected(false)
      }
    }
  }

  return {
    color,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
  }
}
