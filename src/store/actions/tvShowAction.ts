import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../services/requests';
import {topRatedTvShowsUrl} from '../../services/constants/url';
import {TVShow} from '../../types';

export const getTopRatedTvShowsAction = createAsyncThunk<TVShow[], void>(
  'tvShows/getTopRatedTvShows',
  async () => {
    const response = await getRequest(topRatedTvShowsUrl);

    return response.data.results;
  },
);
