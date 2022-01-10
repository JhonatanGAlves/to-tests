import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledExerciseInput } from './InputState'

const ConditionalRendering = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <StyledExerciseInput>
      {show &&
        <span>Esta frase foi exibida quando houve clique no botão abaixo!</span>
      }
      <StyledButton onClick={handleClick}>{show ?
        'Ocultar frase' :
        'Mostrar frase'
      }
      </StyledButton>
    </StyledExerciseInput>
  )
}

export const StyledButton = styled.button`
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid #747474;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 600;
    color: #747474;

    &:hover {
      color: #FFF;
      background-color: #747474;
      cursor: pointer;
  }
`

export default ConditionalRendering