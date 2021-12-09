import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Main from '../Main';

const Home = () => {
  return (
    <div className='container'>
      <h1><Link to="/">Фильмобаза</Link></h1>
      <Header />
      <Main />
    </div>
  );
};

export default Home;