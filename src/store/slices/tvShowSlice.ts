import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TVShow, TvShowSliceTypes} from '../../types';
import {getTopRatedTvShowsAction} from '../actions/tvShowAction';
import {getTopRatedMoviesAction} from '../actions/movieAction';

const initialState: TvShowSliceTypes = {
  pending: false,
  error: null,
  topRatedTvShows: [],
};

export const tvShowSlice = createSlice({
  name: 'tvShow',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTopRatedTvShowsAction.pending, state => {
        state.pending = true;
      })
      .addCase(
        getTopRatedTvShowsAction.fulfilled,
        (state, action: PayloadAction<TVShow[]>) => {
          state.pending = false;

          state.topRatedTvShows = action.payload;
        },
      )
      .addCase(getTopRatedMoviesAction.rejected, (state, action: any) => {
        state.error = action.error.message;
      });
  },
});

export const {} = tvShowSlice.actions;

export default tvShowSlice.reducer;
