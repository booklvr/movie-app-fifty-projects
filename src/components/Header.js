import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Header = ({ setSearchTerm }) => {
  const [text, setText] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setSearchTerm(text)
  }

  return (
    <header>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type='text'
          id='search'
          className='search'
          placeholder='Search'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </header>
  )
}

Header.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
}

export default Header
