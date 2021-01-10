import React, { Fragment, useState, useEffect } from 'react'
import Movie from './Movie'
import Header from './Header'

const MovieApp = () => {
  const API_URL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
  const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const getMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log('data.results:', data.results)
    setMovies(data.results)
  }

  useEffect(() => {
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm)
    } else {
      getMovies(API_URL)
    }
  }, [searchTerm])
  return (
    <Fragment>
      <Header setSearchTerm={setSearchTerm} />
      <main>
        {movies.length > 0 &&
          movies.map((movie, index) => (
            <Movie key={index} movie={movie}></Movie>
          ))}
      </main>
    </Fragment>
  )
}

export default MovieApp
