import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import Slider from 'react-slick'
import { MovieContext } from '../../context/movieContext/MovieContext';
import Loader from '../Loader';
import Card from '../Card';
import Header from '../Header'
import '../styles/MovieProfile.css'

const MovieProfile = () => {

  const { getDetails, loading, details, getActors, actors, getRecomendations, recomendations } = useContext(MovieContext)

  const params = useParams()
  const urlName = params.name

  useEffect(() => {
    getDetails(urlName)
    getActors(urlName)
    getRecomendations(urlName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlName])

  if (loading) {
    return <Loader />
  }

  const { overview, backdrop_path, title, genres, tagline, poster_path } = details
  const backdropURL = "https://image.tmdb.org/t/p/original"
  const posterURL = "https://image.tmdb.org/t/p/w500"

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  }

  return (
    <div className='container relative'>
      <Header />
      <img className='backdrop' src={`${backdropURL}${backdrop_path}`} alt={title} />
      <div className="d-flex">
        <img className='poster' src={`${posterURL}${poster_path}`} alt={title} />
        <div className="description">
          <h2 className='title'>{title}</h2>
          {tagline ? <h3 className='tagline'>Девиз: {tagline}</h3> : null}
          <p className='overview'>{overview ? overview : 'Нет описания'}</p>
        </div>
      </div>
      <div className='genres-list'>{genres ? genres.map(item => (<span key={item.id} className='genre'>{item.name}</span>)) : 'Жанры не указаны'}</div>
      <h3 className="title">Актёры</h3>
      <div className="slider-container">
        <Slider {...settings}>
          {actors.map(actor => {
            if (actor.known_for_department !== 'Acting') { return null }
            return (
              <div title={actor.character} key={actor.id} >
                <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt="actor" height='200px' />
                <p className="name" align='center'>{actor.name}</p>
              </div>)
          })
          }
        </Slider>
      </div >
      <h3 className='title'>Рекомендации</h3>
      <div className="slider-container">
        <Slider {...settings}>
          {loading
            ? <Loader />
            : recomendations.map(item => {
              return <Card movie={item} key={item.id} />
            })}
        </Slider>
      </div>
    </div >
  );
};



export default MovieProfile;