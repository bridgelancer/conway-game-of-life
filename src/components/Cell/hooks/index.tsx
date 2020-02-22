import { useState } from 'react'

export const useCellStatesHook = () => {
  const [color, setColor] = useState('green')
  const [selected, setSelected] = useState(false)
  const [fixed, setFixed] = useState(false)

  const checkNotFixedAndSelected = () => {
    return !selected && !fixed
  }

  const handleMouseEnter = (() => {
    if (checkNotFixedAndSelected()){
      setColor('darkGreen')
    }
  })

  const handleMouseLeave = (() => {
    if (checkNotFixedAndSelected()){
      setColor('green')
    }
  })

  const handleClick = () => {
    if(!fixed) {
      if (!selected) {
        setColor('red')
      } else {
        setColor('green')
      }
      setSelected(!selected)
    }
  }

  return {
    color,
    selected,
    fixed,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
  }
}
