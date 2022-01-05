import React from 'react'
import { StyledExerciseInput } from '../InputState'
import StylesInLine from './StylesInLine'
import Stylesheet from './Stylesheet'
import CSSModules from './CSSModules'
import StyledComponents from './StyledComponents'
import DinamicPropsToStyled from './dinamicProps/DinamicPropsToStyled'

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
        <hr />
        <DinamicPropsToStyled />
      </StyledExerciseInput>
    </>
  )
}

export default ListsAndStyles