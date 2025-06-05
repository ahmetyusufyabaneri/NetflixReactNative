import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MovieCardProps, RootNavigatorScreens} from '../types';
import CustomImage from './CustomImage';
import {screenNames} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NavigationProps = NativeStackNavigationProp<
  RootNavigatorScreens,
  'MovieDetail'
>;

const MovieCard: React.FC<MovieCardProps> = ({data}) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(screenNames.MovieDetail, {movie: data})
      }>
      <CustomImage path={data?.poster_path} />
    </TouchableOpacity>
  );
};

export default MovieCard;
