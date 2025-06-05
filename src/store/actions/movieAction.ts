import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../services/requests';
import {topRatedUrl} from '../../services/constants/url';
import {Movie} from '../../types';

export const getTopRatedMoviesAction = createAsyncThunk<Movie[], void>(
  'movies/getTopRatedMovies',
  async () => {
    const response = await getRequest(topRatedUrl);
    return response.data.results as Movie[];
  },
);
