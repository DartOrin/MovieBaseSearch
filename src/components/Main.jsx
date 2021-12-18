import React, { useContext } from 'react';
import { MovieContext } from '../context/movieContext/MovieContext';
import Card from './Card';
import Loader from './Loader';
import Search from './Search';

const Main = ({ type, onSearch }) => {

  const { loading, movies, popular } = useContext(MovieContext)
  if (type === 'popular') {
    return (
      <main className='container'>
        <Search onSearch={onSearch} />
        {loading
          ? <Loader />
          : popular.map(item => (
            <Card movie={item} key={item.id} search />
          ))
        }
      </main>
    )
  }
  return (
    <main className='container'>
      <Search />
      {loading
        ? <Loader />
        : movies.map(item => (
          <Card movie={item} key={item.id} search />
        ))
      }
    </main>
  );
};

export default Main;