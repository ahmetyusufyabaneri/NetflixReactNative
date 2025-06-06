import {Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import {useAppDispatch} from '../store/hooks';
import {getMovieDetailAction} from '../store/actions/movieAction';

type MovieDetailRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;

const MovieDetail: React.FC = () => {
  const {movie} = useRoute<MovieDetailRouteProp>().params;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovieDetailAction(movie.id));
  }, []);

  return (
    <SafeAreaView>
      <Text>{movie.id}</Text>
    </SafeAreaView>
  );
};

export default MovieDetail;
