import React from 'react'

const Search = ({handleSearch}) => {
  console.log('Search')
  return (
    <div>
      <input
        type="text"
        className='border'
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search
