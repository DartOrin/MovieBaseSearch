import React, { useContext } from 'react';
import { MovieContext } from '../context/movieContext/MovieContext';
import Card from './Card';
import Loader from './Loader';
import Search from './Search';

const Main = () => {

  const { loading, movies } = useContext(MovieContext)

  return (
    <div className='container'>
      <Search />
      {loading
        ? <Loader />
        : movies.map(item => (
          <Card movie={item} key={item.id} search />
        ))
      }
    </div>
  );
};

export default Main;