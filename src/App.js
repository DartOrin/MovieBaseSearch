import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MovieState from './context/movieContext/MovieState';
import Home from './components/pages/Home';
import MovieProfile from './components/pages/MovieProfile';

import './App.css';

function App() {
  return (
    <div>
      <MovieState>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/movie/:name" element={<MovieProfile/>}/>
            <Route path="*" element={<h2>Ресурс не найден</h2>}/>
          </Routes>
        </BrowserRouter>
      </MovieState>
    </div>
  );
}

export default App;

