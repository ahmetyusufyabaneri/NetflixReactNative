import {combineReducers} from '@reduxjs/toolkit';
import MovieReducer from './movieSlice';
import TvShowReducer from './tvShowSlice';

export const rootReducer = combineReducers({
  movie: MovieReducer,
  tvShow: TvShowReducer,
});
