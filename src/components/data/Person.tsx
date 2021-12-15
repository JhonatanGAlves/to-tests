import React from 'react'

type Props = {
  data: {
    name: string,
    age: number
  }
}

const Person = ({ data }: Props) => {
  return (
    <li>
      {data.name} tem {data.age} anos.
    </li>
  )
}

export default Person