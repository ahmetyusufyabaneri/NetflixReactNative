import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {getTopRatedMoviesAction} from '../store/actions/movieAction';
import MovieCard from '../components/MovieCard';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const {topRatedMovies} = useSelector(state => state.rootReducer.movie);
  console.log(topRatedMovies);

  useEffect(() => {
    dispatch(getTopRatedMoviesAction());
  }, []);

  return (
    <SafeAreaView className="container">
      <Header />
      <FlatList
        data={topRatedMovies}
        renderItem={({item}) => <MovieCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default Home;
