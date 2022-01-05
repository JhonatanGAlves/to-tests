import React from 'react'
import styled from 'styled-components'

const StyledComponents = () => {
  return (
    <>
      <h3>Styled Components</h3>
      <Button>Styled Components</Button>
    </>
  )
}

const Button = styled.button`
  background-color:	#FF6347;
  color: #FFF;

  padding: 10px 20px;
  border: 0;
  border-radius: 15px 5px;

  &:hover {
    background-color: #FF0000;
  }
`

export default StyledComponents