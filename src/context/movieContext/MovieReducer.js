import { GET_POPULAR, SET_LOADING, SEARCH_MOVIES, CLEAR_MOVIES, GET_MOVIE } from "../types";

const handlers = {
  [GET_POPULAR]: (state, {payload}) =>({...state, popular: payload, loading: false}),
  [SET_LOADING]: (state) => ({...state, loading: true}),
  [SEARCH_MOVIES]: (state, {payload}) =>({...state, movies: payload, loading: false}),
  [CLEAR_MOVIES]: (state) =>({...state, movies: []}),
  [GET_MOVIE]: (state, {payload}) =>({...state, details: payload, loading: false}),
  DEFAULT: state => state
}


export const movieReducer = (state, action) =>{
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state,action)
}