import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../services/requests';
import {
  movieUrl,
  popularMoviesUrl,
  topRatedMoviesUrl,
} from '../../services/constants/url';
import {Movie, MovieDetail} from '../../types';

export const getTopRatedMoviesAction = createAsyncThunk<Movie[], void>(
  'movies/getTopRatedMovies',
  async () => {
    const response = await getRequest(topRatedMoviesUrl);
    return response?.data?.results as Movie[];
  },
);

export const getPopularMoviesAction = createAsyncThunk<Movie[], void>(
  'movies/getPopularMovies',
  async () => {
    const response = await getRequest(popularMoviesUrl);
    return response?.data?.results as Movie[];
  },
);

export const getMovieDetailAction = createAsyncThunk<MovieDetail, number>(
  'movies/getMovieDetail',
  async (id: number) => {
    const response = await getRequest(`${movieUrl}/${id}`);
    return response?.data as MovieDetail;
  },
);
