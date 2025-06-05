import {FlatList, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import MovieSection from '../components/MovieSection';
import {homeSections} from '../constants/homeSections';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {getTopRatedMoviesAction} from '../store/actions/movieAction';
import {getTopRatedTvShowsAction} from '../store/actions/tvShowAction';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const {topRatedMovies} = useAppSelector(state => state.rootReducer.movie);

  useEffect(() => {
    dispatch(getTopRatedMoviesAction());
    dispatch(getTopRatedTvShowsAction());
  }, []);

  return (
    <SafeAreaView className="container">
      <Header />
      <Subheader />
      <FlatList
        data={homeSections}
        renderItem={({item}) => (
          <MovieSection data={item} movies={topRatedMovies} />
        )}
        contentContainerClassName="gap-8"
      />
    </SafeAreaView>
  );
};

export default Home;
