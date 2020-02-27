import React from 'react'
import { Button } from 'semantic-ui-react'

const Toolbar = (props: any) => {
  const { handleBlockInput } = props

  return (
    <Button
      onClick={handleBlockInput}
    >
      Hi
    </Button>
  )}

export default Toolbar
