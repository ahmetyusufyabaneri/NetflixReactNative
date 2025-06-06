import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  getMovieDetailAction,
  getPopularMoviesAction,
  getTopRatedMoviesAction,
} from '../actions/movieAction';
import {Movie, MovieSliceTypes} from '../../types';

const initialState: MovieSliceTypes = {
  pending: false,
  error: null,
  topRatedMovies: [],
  popularMovies: [],
  movieDetail: {},
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTopRatedMoviesAction.pending, state => {
        state.pending = true;
      })
      .addCase(
        getTopRatedMoviesAction.fulfilled,
        (state, action: PayloadAction<Movie[]>) => {
          state.pending = false;

          state.topRatedMovies = action.payload;
        },
      )
      .addCase(getTopRatedMoviesAction.rejected, (state, action: any) => {
        state.error = action.error.message;
      })
      .addCase(getPopularMoviesAction.pending, state => {
        state.pending = true;
      })
      .addCase(
        getPopularMoviesAction.fulfilled,
        (state, action: PayloadAction<Movie[]>) => {
          state.pending = false;

          state.popularMovies = action.payload;
        },
      )
      .addCase(getPopularMoviesAction.rejected, (state, action: any) => {
        state.error = action.error.message;
      })
      .addCase(getMovieDetailAction.pending, state => {
        state.pending = true;
      })
      .addCase(getMovieDetailAction.fulfilled, (state, action) => {
        state.pending = false;

        state.movieDetail = action.payload;
      })
      .addCase(getMovieDetailAction.rejected, (state, action: any) => {
        state.error = action.error.message;
      });
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
