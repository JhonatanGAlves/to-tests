import React from 'react'
import { StyledExerciseInput } from '../InputState'
import StylesInLine from './StylesInLine'
import Stylesheet from './Stylesheet'
import CSSModules from './CSSModules'
import StyledComponents from './StyledComponents'

const ListsAndStyles = () => {
  return (
    <>
      <StyledExerciseInput>
        <StylesInLine />
        <hr />
        <Stylesheet />
        <hr />
        <CSSModules />
      </StyledExerciseInput>
      <StyledExerciseInput>
        <StyledComponents />
      </StyledExerciseInput>
    </>
  )
}

export default ListsAndStyles