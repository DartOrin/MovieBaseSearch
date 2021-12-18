import React, { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick'
import { MovieContext } from '../../context/movieContext/MovieContext'

import Card from '../Card'
import Loader from '../Loader'
import Main from '../Main'
import Header from '../Header'
import '../styles/Home.css'

const Home = () => {
  const { getPopular, popular, loading } = useContext(MovieContext)
  const [type, setType] = useState('search')
  useEffect(() => {
    getPopular()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  if (loading && popular.lenght === 0) {
    return <Loader />
  }
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 5000
  }
  return (
    <>
      <header className='container' >
        <Header />
        <h2
          className='popular__title'
          onClick={() => setType('popular')}
        >Популярное</h2>
        <div className="slider-container">
          <Slider {...settings} >
            {popular.map(item => {
              return <Card movie={item} key={item.id} />
            })}
          </Slider>
        </div>
      </header>
      <Main type={type} onSearch={() => setType('search')} />
    </>
  )
};

export default Home;