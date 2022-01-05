import React from 'react'
import { StyledExerciseInput } from '../InputState'
import StylesInLine from './StylesInLine'
import Stylesheet from './Stylesheet'
import CSSModules from './CSSModules'

const ListsAndStyles = () => {
  return (
    <StyledExerciseInput>
      <StylesInLine />
      <hr />
      <Stylesheet />
      <hr />
      <CSSModules />
    </StyledExerciseInput>
  )
}

export default ListsAndStyles