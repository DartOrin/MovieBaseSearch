import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { MovieContext } from '../../context/movieContext/MovieContext';
import Loader from '../Loader';

const MovieProfile = () => {
  const { getMovie } = useContext(MovieContext)
  const params = useParams()
  const urlName = params.name
  useEffect(() => {
    getMovie(urlName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Loader />
    </div>
  );
};

export default MovieProfile;