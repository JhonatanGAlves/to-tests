import React, { useState } from 'react'
import styled from 'styled-components'

const InputState = (props: any) => {
  const [name, setName] = useState('')

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <StyledInput>
      <label htmlFor="">Digite seu nome: </label>
      <input
        type="text"
        value={name}
        onChange={changeName}
      />
      <hr />
      <h2>Seu nome é: <span>{name}</span></h2>
    </StyledInput>
  )
}

export const ExerciseInputState = (props: any) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState()

  const changeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
  }

  const changeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }

  const changeAge = (e: any) => {
    setAge(e.target.value)
  }

  return (
    <StyledExerciseInput>
      <label htmlFor="">Nome: </label>
      <input
        type="text"
        value={firstName}
        onChange={changeFirstName}
      />
      <br />
      <label htmlFor="">Sobrenome: </label>
      <input
        type="text"
        value={lastName}
        onChange={changeLastName}
      />
      <br />
      <label htmlFor="">Idade: </label>
      <input
        type="number"
        value={age}
        onChange={changeAge}
      />
      <br />
      <hr />
      <h2>Olá {firstName} {lastName}, tudo bem? <br />
        Você tem {age} anos.
      </h2>
    </StyledExerciseInput>
  )
}

const StyledInput = styled.div`
  padding: 20px;
  border: 1px solid #747474;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    text-align: start;
  }

  input {
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #747474;
    outline: none;
  }

  h2 {
    text-align: start;
  }

  span {
    padding: 5px;
    background-color: #747474;
  }
`

export const StyledExerciseInput = styled.div`
  padding: 20px;
  border: 1px solid #747474;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justfy-content: start;

  label {
    text-align: start;
  }

  input {
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #747474;
    outline: none;
  }

  h2 {
    text-align: start;
  }

  span {
    padding: 5px;
    background-color: #747474;
  }
`

export default InputState