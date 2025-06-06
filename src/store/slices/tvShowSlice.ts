import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TVShow, TVShowDetail, TvShowSliceTypes} from '../../types';
import {
  getPopularTvShowsAction,
  getTopRatedTvShowsAction,
  getTvShowDetailAction,
} from '../actions/tvShowAction';

const initialState: TvShowSliceTypes = {
  pending: false,
  error: null,
  topRatedTvShows: [],
  popularTvShows: [],
  tvShowDetail: null,
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
      .addCase(getTopRatedTvShowsAction.rejected, (state, action: any) => {
        state.error = action.error.message;
      })
      .addCase(getPopularTvShowsAction.pending, state => {
        state.pending = true;
      })
      .addCase(
        getPopularTvShowsAction.fulfilled,
        (state, action: PayloadAction<TVShow[]>) => {
          state.pending = false;

          state.popularTvShows = action.payload;
        },
      )
      .addCase(getPopularTvShowsAction.rejected, (state, action: any) => {
        state.error = action.error.message;
      })
      .addCase(getTvShowDetailAction.pending, state => {
        state.pending = true;
      })
      .addCase(
        getTvShowDetailAction.fulfilled,
        (state, action: PayloadAction<TVShowDetail>) => {
          state.pending = false;

          state.tvShowDetail = action.payload;
        },
      )
      .addCase(getTvShowDetailAction.rejected, (state, action: any) => {
        state.error = action.error.message;
      });
  },
});

export const {} = tvShowSlice.actions;

export default tvShowSlice.reducer;
