import React, { useState, useEffect } from 'react'
import { StyledExerciseInput } from './InputState'
import { StyledButton } from './ConditionalRendering'
import styled from 'styled-components'

type Movie = {
  titulo: string,
  avatar: string
}

const GetRequest = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [change, setChange] = useState(false)

  useEffect(() => {
    setChange(!change)
  }, [movies])

  // fetch para fazer a requisição do tipo GET e o .then para pegar o resultado
  // e então retornar o resultado e executar com o .json()
  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setMovies(json)
      })
  }

  return (
    <StyledExerciseInput>
      <StyledButton onClick={loadMovies}>
        Carregar Filmes
      </StyledButton>
      <h3>Total de filmes: {!change ? movies.length : ''}</h3>
      <StyledMovieList>
        {movies.map((movie, index) => (
          <div className='movie-list' key={index}>
            <h1>{movie.titulo}</h1>
            <img src={movie.avatar} alt="Capa do Filme" />
          </div>
        ))}
      </StyledMovieList>
    </StyledExerciseInput>
  )
}

const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin-top: 20px;

  .movie-list {
    border: 1px solid #747474;
    padding: 15px;
    
    h1 {
      margin: 25px 0 10px 0;
      text-transform: uppercase;
      font-weight: bold;

      color: #363636;
    }

    img {
      border-radius: 10px;
    }
  }
`

export default GetRequest