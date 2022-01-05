import React from 'react'
import * as C from './StylesDinamicProps'

const DinamicPropsToStyled = () => {
  return (
    <>
      <h3>Props em Styled</h3>
      <C.Button
        bg="#FF4500"
        radius // <- mesma coisa que radius={true}
      >BG
      </C.Button>
      <br />
      <C.Button
        bg="#FF8C00"
        small // <- mesma coisa que small={true}
      >BG / SMALL
      </C.Button>
    </>
  )
}

export default DinamicPropsToStyled