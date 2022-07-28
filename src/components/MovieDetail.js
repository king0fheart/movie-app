import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import movieApi from "../api/movieApi";
import { getMovieDetail, selMovieDetail } from "../features/movies";

const MovieDetail = () => {
  const APIKey = process.env.REACT_APP_MOVIE_APIKEY;
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  const detail = useSelector(getMovieDetail);

  useEffect(() => {
    const getDetails = async () => {
      const response = await movieApi.get(
        `?apikey=${APIKey}&i=${imdbID}&plot=full`
      );
      dispatch(selMovieDetail(response.data));
    };
    getDetails();
  }, [imdbID, dispatch]);

  return (
    <div className="App" style={ {marginTop:"100px"} }>
      <div className="movie_single">
        <div className="container">
          <div className="movie-single">
            <div className="row">
              <div className="col-md-4">
                <div className="movie-poster">
                  <img width="350" height="520" src={detail.Poster} alt="" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="movie-single-content main-content">
                  <h2 className="mv-title">{detail.Title}</h2>
                  <div id="overview">
                    <span className="movie-overview">IMDB Rating <i className="fa-solid fa-star"></i>: {detail.imdbRating}</span>
                    <span className="movie-overview">IMDB Votes <i className="fa-solid fa-thumbs-up"></i>: {detail.imdbVotes}</span>
                    <span className="movie-overview">Runtime <i className="fa-solid fa-clock"></i>: {detail.Runtime}</span>
                    <div className="row" style={{background: "white"}}>
                      <div className="col-md-8">
                        <div className="overview-left-ct">
                          <p className="overview-ct"></p>
                          <p>{detail.Plot}</p>
                        </div>
                        <div className="col-md-4">
                        <div className="overview-sb-it">
                          <h6>Actors: </h6>
                          <span className="white-text">{detail.Actors}</span>
                        </div>
                        <div className="overview-sb-it" style={{marginTop: "10px"}}>
                          <h6>Genre: </h6>
                          <span className="white-text">{detail.Genre}</span>
                        </div>
                        <div className="overview-sb-it" style={{marginTop: "10px"}}>
                          <h6>Awards: </h6>
                          <span className="white-text">{detail.Awards}</span>
                        </div>
                      </div>
                      </div>
                      <div className="col-md-4">
                        <div className="overview-sb-it">
                          <h6>Director: </h6>
                          <span className="white-text">{detail.Director}</span>
                        </div>
                        <div className="overview-sb-it" style={{marginTop: "10px"}}>
                          <h6>Writer: </h6>
                          <span className="white-text">{detail.Writer}</span>
                        </div>
                        <div className="overview-sb-it" style={{marginTop: "10px"}}>
                          <h6>Release Date: </h6>
                          <span className="white-text">{detail.Released}</span>
                        </div>
                        <div className="overview-sb-it" style={{marginTop: "10px"}}>
                          <h6>Language: </h6>
                          <span className="white-text">{detail.Language}</span>
                        </div>
                      </div>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
