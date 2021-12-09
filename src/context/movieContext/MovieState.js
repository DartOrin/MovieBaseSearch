import React, {useReducer} from 'react';
import axios from 'axios';
import {MovieContext} from './MovieContext'
import {movieReducer} from './MovieReducer'
import { GET_POPULAR, SET_LOADING, SEARCH_MOVIES, CLEAR_MOVIES, GET_MOVIE } from '../types';

const key = `1b12b09661628ab2ea9db49cda0f3ae8`

const MovieState = ({children})=>{

  const initialState = {
    popular: [],
    loading: false, 
    movies: [], 
    details: {},
    movie: {}
  }

  const [state, dispatch] = useReducer(movieReducer, initialState)

  const setLoading = () => dispatch({type: SET_LOADING})

  const getPopular = async () =>{
    setLoading()
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ru-RU&page=1&region=ru`
    )

    dispatch({
      type: GET_POPULAR,
      payload: response.data.results
    })
    
  }

  const getMovie = async (id) =>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=ru-RU`)
    dispatch({
      type: GET_MOVIE,
      payload: response.data
    })
  }

  const search = async value => {
    setLoading()

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=ru-RU&query=${value}&include_adult=false`
    )

    dispatch({
      type: SEARCH_MOVIES,
      payload: response.data.results
    })
  }
  const clearMovies = () =>dispatch({type: CLEAR_MOVIES})


  const {popular, loading, movies, details} = state

  return (
      <MovieContext.Provider value={{ getPopular, setLoading, popular, loading, movies, search, getMovie, details, clearMovies }}>
        {children}
      </MovieContext.Provider>
    )

}

export default MovieState