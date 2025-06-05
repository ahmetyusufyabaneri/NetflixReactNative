import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import SectionTitle from './SectionTitle';
import MovieCard from './MovieCard';
import {MovieSectionProps} from '../types';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {homeSectionsNames} from '../constants/homeSections';
import {
  getPopularMoviesAction,
  getTopRatedMoviesAction,
} from '../store/actions/movieAction';
import {
  getPopularTvShowsAction,
  getTopRatedTvShowsAction,
} from '../store/actions/tvShowAction';

const MovieSection: React.FC<MovieSectionProps> = ({data}) => {
  const dispatch = useAppDispatch();

  const {topRatedMovies, popularMovies} = useAppSelector(
    state => state.rootReducer.movie,
  );
  const {topRatedTvShows, popularTvShows} = useAppSelector(
    state => state.rootReducer.tvShow,
  );

  const returnData = () => {
    if (data?.section == homeSectionsNames.topRatedMovies) {
      return topRatedMovies;
    } else if (data?.section == homeSectionsNames.popularMovies) {
      return popularMovies;
    } else if (data?.section == homeSectionsNames.topRatedTvShows) {
      return topRatedTvShows;
    } else if (data?.section == homeSectionsNames.popularTvShows) {
      return popularTvShows;
    }
  };

  useEffect(() => {
    if (data?.section == homeSectionsNames.topRatedMovies) {
      dispatch(getTopRatedMoviesAction());
    } else if (data?.section == homeSectionsNames.popularMovies) {
      dispatch(getPopularMoviesAction());
    } else if (data?.section == homeSectionsNames.topRatedTvShows) {
      dispatch(getTopRatedTvShowsAction());
    } else if (data?.section == homeSectionsNames.popularTvShows) {
      dispatch(getPopularTvShowsAction());
    }
  }, []);

  return (
    <View>
      <SectionTitle title={data.title} />
      <FlatList
        data={returnData()}
        renderItem={({item}) => <MovieCard data={item} />}
        horizontal
      />
    </View>
  );
};

export default MovieSection;
