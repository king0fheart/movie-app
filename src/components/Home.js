import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import movieApi from '../api/movieApi';
import { allMovies } from '../features/movies';
import MovieListing from './MovieListing';

export const Home = () => {
  const APIKey = process.env.REACT_APP_MOVIE_APIKEY;
  const dispatch = useDispatch();
  let location = useLocation();
  let movieText = location.state !== null ? location.state.search : "Captain";

  useEffect(() => {
    const getMovies = async () => {
      const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`);
      dispatch(allMovies(response.data))
    }
    getMovies();
  }, [movieText, dispatch]);
  
  return (
    <div>
      <h2>Movies</h2>
      <MovieListing />
    </div>
  )
}
