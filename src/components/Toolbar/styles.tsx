import styled from 'styled-components'

import { SELECTED_COLOR } from '../Cell/hooks'

export const ToolbarCSS = styled.div`
  display: flex;
  justify-content: space-between;

  border: 3px solid;
  border-radius: 1rem;


  svg {
    margin: 0.5rem;
    &:hover {
      cursor: pointer;

      .pattern {
        fill: ${SELECTED_COLOR}
      }
    }
  }
`
