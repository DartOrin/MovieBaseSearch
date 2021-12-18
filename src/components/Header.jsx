import React from 'react';
import { Link } from 'react-router-dom'
import './styles/Header.css'

const Header = () => {
  return (
    <h1 className='header__title'><Link to="/">Фильмобаза</Link></h1>
  );
};

export default Header;