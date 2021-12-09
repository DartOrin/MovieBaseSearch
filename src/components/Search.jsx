import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/movieContext/MovieContext';

const Search = () => {
  const [value, setValue] = useState('');
  const { search } = useContext(MovieContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }
    search(value.trim())
  }

  return (
    <div className="search-form">
      <input
        type="text"
        className="form-control"
        placeholder="Введите название фильма..."
        onKeyPress={onSubmit}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};

export default Search;