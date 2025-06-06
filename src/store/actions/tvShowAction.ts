import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../services/requests';
import {
  popularTvShowsUrl,
  topRatedTvShowsUrl,
  tvUrl,
} from '../../services/constants/url';
import {TVShow, TVShowDetail} from '../../types';

export const getTopRatedTvShowsAction = createAsyncThunk<TVShow[], void>(
  'tvShows/getTopRatedTvShows',
  async () => {
    const response = await getRequest(topRatedTvShowsUrl);
    return response?.data?.results as TVShow[];
  },
);

export const getPopularTvShowsAction = createAsyncThunk<TVShow[], void>(
  'tvShows/getPopularTvShows',
  async () => {
    const response = await getRequest(popularTvShowsUrl);
    return response?.data?.results as TVShow[];
  },
);

export const getTvShowDetailAction = createAsyncThunk<TVShowDetail, number>(
  'tvShows/getTvShowDetail',
  async (id: number) => {
    const response = await getRequest(`${tvUrl}/${id}`);
    return response?.data as TVShowDetail;
  },
);
