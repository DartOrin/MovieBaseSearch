import React, {useReducer} from 'react';
import axios from 'axios';
import {MovieContext} from './MovieContext'
import {movieReducer} from './MovieReducer'
import { GET_POPULAR, SET_LOADING, SEARCH_MOVIES, CLEAR_MOVIES, GET_DETAILS, GET_ACTORS, GET_RECOMENDATIONS } from '../types';

const key = `1b12b09661628ab2ea9db49cda0f3ae8`

const MovieState = ({children})=>{

  const initialState = {
    popular: [],
    loading: false, 
    movies: [], 
    details: {},
    actors: [],
    recomendations: []
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

  const getDetails = async (id) =>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=ru-RU`)
    dispatch({
      type: GET_DETAILS,
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

  const getActors = async id =>{
    setLoading()
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=ru-RU`
    )
    dispatch({
      type: GET_ACTORS,
      payload: response.data.cast
    })
  }

  const getRecomendations = async id =>{
    setLoading()
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${key}&language=ru-RU&page=1`
    )

    dispatch({
      type: GET_RECOMENDATIONS,
      payload: response.data.results
    })
  }

  const {popular, loading, movies, details, recomendations, actors} = state

  return (
      <MovieContext.Provider value={{ 
        getPopular, setLoading,
        popular, loading,
        movies, search,
        getDetails, details,
        clearMovies, getActors,
        getRecomendations, recomendations, actors
        }}>
        {children}
      </MovieContext.Provider>
    )

}

export default MovieState