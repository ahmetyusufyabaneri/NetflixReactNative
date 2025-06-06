import {combineReducers} from '@reduxjs/toolkit';
import MovieReducer from './movieSlice';
import TvShowReducer from './tvShowSlice';
import NotificationReducer from './notificationSlice';

export const rootReducer = combineReducers({
  movie: MovieReducer,
  tvShow: TvShowReducer,
  notification: NotificationReducer,
});
