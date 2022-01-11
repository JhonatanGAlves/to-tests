import React, { useState, useEffect } from 'react'
import { StyledExerciseInput } from './InputState'
import { StyledButton } from './ConditionalRendering'
import styled from 'styled-components'
import imgLoading from '../assets/image/loading.svg'

type Movie = {
  titulo: string,
  avatar: string
}

const GetRequest = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [change, setChange] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setChange(!change)
  }, [movies])

  // fetch para fazer a requisição do tipo GET e o .then para pegar o resultado
  // e então retornar o resultado e executar com o .json()

  /*const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setMovies(json)
      })
  }*/

  const loadMovies = async () => { // async == haverá uma requisição e ela quer esperar as respostas para continuar.
    setLoading(true)
    // await == o fetch só será armazenado em response quando a requisição for concluída.
    let response = await fetch('https://api.b7web.com.br/cinema/')
    // por conta do await o mesmo acontece com o let json, response.json() só será armazena quando response tiver tudo certo
    let json = await response.json()
    setLoading(false)
    setMovies(json)
  }

  return (
    <StyledExerciseInput>
      <StyledButton onClick={loadMovies}>
        Carregar Filmes
      </StyledButton>
      <h3>Total de filmes: {!change ? movies.length : ''}</h3>
      {loading &&
        <div style={{ padding: '100px' }}>
          <h1 style={{ marginBottom: '20px' }}>Carregando...</h1>
          <img src={imgLoading} />
        </div>
      }
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