import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../services/requests';
import {
  popularTvShowsUrl,
  topRatedTvShowsUrl,
} from '../../services/constants/url';
import {TVShow} from '../../types';

export const getTopRatedTvShowsAction = createAsyncThunk<TVShow[], void>(
  'tvShows/getTopRatedTvShows',
  async () => {
    const response = await getRequest(topRatedTvShowsUrl);
    return response?.data?.results;
  },
);

export const getPopularTvShowsAction = createAsyncThunk<TVShow[], void>(
  'tvShows/getPopularTvShows',
  async () => {
    const response = await getRequest(popularTvShowsUrl);
    return response?.data?.results;
  },
);
