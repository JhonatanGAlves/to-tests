import React from 'react'
import { StyledExerciseInput } from '../InputState'
import StylesInLine from './StylesInLine'
import Stylesheet from './Stylesheet'

const ListsAndStyles = () => {
  return (
    <StyledExerciseInput>
      <StylesInLine />
      <hr />
      <Stylesheet />
    </StyledExerciseInput>
  )
}

export default ListsAndStyles