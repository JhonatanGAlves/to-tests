import React from 'react'
import * as C from './StylesStyledComponents'

// Uma das formas bastante utilizada é criar os styled components em um arquivo separado e depois somente importa-los
// usando * as C, * para pegar todos os components daquele arquivo e C para chamar o componente, usando C. dessa forma
// ira aparecer para selecionar o component que deseja usar.

const StyledComponents = () => {
  return (
    <>
      <h3>Styled Components</h3>
      <C.Button>Styled Components</C.Button>
    </>
  )
}

export default StyledComponents