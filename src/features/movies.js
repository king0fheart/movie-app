import { createSlice } from "@reduxjs/toolkit";

/* const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const movieText = "Harry";
  const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`);
  console.log("response: ", response);
  return (response.data)
})
*/

const initialState = {
  movies: {},
  movieDetail: {},
}
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    allMovies: (state, action) => {
      state.movies = action.payload;
    },

    selMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    }
  },
});

export const { allMovies, selMovieDetail } = movieSlice.actions;

export const getAllMovies = (state) => state.movie.movies;
export const getMovieDetail = (state) => state.movie.movieDetail;

export default movieSlice.reducer;