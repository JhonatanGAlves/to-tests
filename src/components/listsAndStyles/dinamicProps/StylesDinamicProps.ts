import styled from 'styled-components'

type ButtonProps = {
  bg: string,
  small?: boolean,
  radius?: boolean
}
export const Button = styled.button<ButtonProps>`
  background-color:	${props => (props.bg)};
  color: #FFF;

  padding: ${props => (props.small ? '5px 10px' : '15px 20px')};
  border: 0;
  border-radius: ${props => (props.radius ? '15px 5px' : '5px 15px')};

  &:hover {
    background-color: #FF0000;
  }
`