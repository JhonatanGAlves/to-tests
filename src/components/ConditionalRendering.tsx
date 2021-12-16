import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledExerciseInput } from './InputState'

const ConditionalRendering = () => {
  const [show, setShow] = useState(false)

  const handleShow = (e: any) => {
    setShow(true)
  }

  const handleHide = (e: any) => {
    setShow(false)
  }

  return (
    <StyledExerciseInput>
      {show &&
        <span>Esta frase foi exibida quando houve clique no botão abaixo!</span>
      }
      <StyledButton>
        <button onClick={handleShow}>Mostrar frase</button>
        {show &&
          <button onClick={handleHide}>Esconder frase</button>
        }
      </StyledButton>
    </StyledExerciseInput>
  )
}

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  
  button {
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid #747474;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 600;
    color: #747474;
  }

  button: hover {
    color: #FFF;
    background-color: #747474;
    cursor: pointer;
  }
`

export default ConditionalRendering