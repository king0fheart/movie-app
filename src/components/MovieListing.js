import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../features/movies'
import { Link } from 'react-router-dom';

const MovieListing = () => {
  const movies = useSelector(getAllMovies); 

  let showMovies = "";
  showMovies = movies.Response === 'True' ? (
    movies.Search.map((movie, index) => (
      <Link to={`/movie/${movie.imdbID}`} key={ index }>
        <div className="card" key={ index } style={{width: "18rem", marginTop: "20px"}}>
          <img src={movie.Poster} className="card-img-top" style={{height: "420px"}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">{movie.Year}</p>
          </div>
        </div>
        </Link>
    ))) : (
    <div><h3>{movies.Error}</h3></div>
  );

  return (
    <div style={{display: "flex", flexWrap: "wrap", columnGap: "15px"}}>
      {
        showMovies
      }
    </div>
  )
}

export default MovieListing