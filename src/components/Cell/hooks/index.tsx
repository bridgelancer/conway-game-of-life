import Konva from 'konva'
import { useState, useEffect } from 'react'

export const DEFAULT_COLOR = '#ffffff'
export const SELECTED_COLOR = Konva.Util.getRandomColor()

export const useCellStatesHook = (props: any) => {
  const {
    color: upstreamColor,
    selected: defaultSelect,
    fixed,
    row,
    column,
    handleBoardChange,
  } = props;

  const [color, setColor] = useState(upstreamColor)
  const [highlighted, setHighlighted] = useState(false)
  const [selected, setSelected] = useState(defaultSelect)

  // Change Cell display to the one passed down on update
  useEffect(() => {
    setColor(upstreamColor)
    if (upstreamColor === SELECTED_COLOR)
      setSelected(true)
    }, [upstreamColor]
  )

  // Remove selected state if the cell is fixed (by any user)
  useEffect(() => {
    if (fixed) {
      setSelected(false)
    }
  }, [fixed])

  useEffect(() => {
    setHighlighted(selected)
  }, [selected])

  const checkNotFixedAndSelected = () => {
    return !selected && !fixed
  }

  // Highlight cell on mouse enter
  const handleMouseEnter = () => {
    if (checkNotFixedAndSelected()){
      setHighlighted(true)
      setColor(SELECTED_COLOR)
    }
  }

  // Revert to default color on mouse leave
  const handleMouseLeave = () => {
    if (checkNotFixedAndSelected()){
      setHighlighted(false)
      setColor(DEFAULT_COLOR)
    }
  }

  // Only change state of cell and board if the cell is not fixed
  const handleClick = () => {
    if(!fixed) {
      if (!selected) {
        setColor(SELECTED_COLOR)
      } else {
        setColor(DEFAULT_COLOR)
      }
      handleBoardChange({row, column, color: SELECTED_COLOR, selected: !selected})
      setSelected(!selected)
    }
  }

  return {
    color,
    highlighted,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
  }
}
