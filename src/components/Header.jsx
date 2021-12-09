import React, { useContext, useEffect } from 'react'
import Slider from 'react-slick'
import { MovieContext } from '../context/movieContext/MovieContext'

import Card from './Card'
import Loader from './Loader'




const Header = () => {

  const { getPopular, popular, loading } = useContext(MovieContext)

  useEffect(() => {
    getPopular()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading && popular.lenght === 0) {
    return <Loader />
  }
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 5000
  }
  return (
    <header className='container' >
      <h2>Популярное</h2>

      <div className="slider_container">
        <Slider {...settings} >
          {popular.map(item => {
            return <Card movie={item} key={item.id} />
          })}
        </Slider>
      </div>


    </header>
  )
}

export default Header;