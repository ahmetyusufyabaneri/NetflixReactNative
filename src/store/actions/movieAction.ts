import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../services/requests';
import {topRatedMoviesUrl} from '../../services/constants/url';
import {Movie} from '../../types';

export const getTopRatedMoviesAction = createAsyncThunk<Movie[], void>(
  'movies/getTopRatedMovies',
  async () => {
    const response = await getRequest(topRatedMoviesUrl);
    return response?.data?.results as Movie[];
  },
);
