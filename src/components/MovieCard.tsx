import {TouchableOpacity} from 'react-native';
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

const MovieCard: React.FC<MovieCardProps> = ({data, content}) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(screenNames.MovieDetail, {
          movie: data,
          type: content,
        })
      }>
      <CustomImage path={data?.poster_path} width={144} height={192} />
    </TouchableOpacity>
  );
};

export default MovieCard;
