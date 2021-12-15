import React from 'react'
import Person from './Person'
import { StyledExerciseInput } from '../InputState'

const ListPerson = () => {
  const list = [
    { name: 'Jhonatan', age: 25 },
    { name: 'Chaiene', age: 23 },
    { name: 'Buck', age: 2 },
    { name: 'Laka', age: 3 },
    { name: 'Bastião', age: 1 }
  ]

  return (
    <StyledExerciseInput>
      <h2>Lista</h2>
      <ul>
        {list.map((item, index) => (
          <Person key={index} data={item} />
        ))}
      </ul>
    </StyledExerciseInput>
  )
}

export default ListPerson