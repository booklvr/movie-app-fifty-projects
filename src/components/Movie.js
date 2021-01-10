import React from 'react'
import PropTypes from 'prop-types'

const Movie = ({ movie }) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

  const { title, vote_average, overview, poster_path } = movie

  return (
    <div className='movie'>
      <img src={IMG_PATH + poster_path} alt='' />
      <div className='movie-info'>
        <h3>{title}</h3>
        <span
          className={
            vote_average >= 8 ? 'green' : vote_average >= 5 ? 'orange' : 'red'
          }
        >
          {vote_average}
        </span>
      </div>
      <div className='overview'>
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default Movie
