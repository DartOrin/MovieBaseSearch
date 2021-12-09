import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCardForPopular = styled.div`
    img {
      width: 120px;
      margin-right: 20px;
      border-bottom-right-radius: 35px;
      border-top-left-radius: 35px;
    }
    p {
      padding-top: 5px;
      text-align: center;
    }
  `
const StyledCard = styled.div`
    border: 1px solid rgba(255, 226, 226,  0.1);
    padding: 10px;
    margin: 20px 0;
    width: 75%;
    img{
      border-bottom-right-radius: 35px;
      border-top-left-radius: 35px;
      margin-left: 0;
      margin-right: 20px;
    }
    a{
      text-decoration: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
    }
  `


const Card = ({ movie, search }) => {

  const posterURL = "https://image.tmdb.org/t/p/w500"

  const { title, poster_path, id, release_date, overview } = movie

  const date = release_date ? release_date.split('-').reverse().join('.') : "неизвестно"


  if (search) {
    return (
      <StyledCard>
        <Link to={`/movie/${id}`} >
          <img src={`${posterURL}${poster_path}`} height='200px' alt="poster" title={title} />
          <div className="desc">
            <h3>{title}</h3>
            <p>{overview}</p>
          </div>
        </Link>

      </StyledCard>
    )
  }

  return (
    <StyledCardForPopular>
      <Link to={`/movie/${id}`} >
        <img src={`${posterURL}${poster_path}`} alt="poster" title={title} />
      </Link>
      <p>{date}</p>
    </StyledCardForPopular>
  );
};

export default Card;