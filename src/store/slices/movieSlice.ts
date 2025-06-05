import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  getPopularMoviesAction,
  getTopRatedMoviesAction,
} from '../actions/movieAction';
import {Movie, MovieSliceTypes} from '../../types';

const initialState: MovieSliceTypes = {
  pending: false,
  error: null,
  topRatedMovies: [],
  popularMovies: [],
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
      });
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
