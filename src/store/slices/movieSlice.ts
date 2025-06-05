import {createSlice} from '@reduxjs/toolkit';
import {getTopRatedMoviesAction} from '../actions/movieAction';
import {MovieSliceTypes} from '../../types';

const initialState: MovieSliceTypes = {
  pending: false,
  error: null,
  topRatedMovies: [],
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
      .addCase(getTopRatedMoviesAction.fulfilled, (state, action) => {
        state.pending = false;

        state.topRatedMovies = action.payload;
      })
      .addCase(getTopRatedMoviesAction.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
