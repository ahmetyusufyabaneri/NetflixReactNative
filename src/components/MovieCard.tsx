import {View, Text} from 'react-native';
import React from 'react';
import {Movie, MovieCardProps} from '../types';
import CustomImage from './CustomImage';

const MovieCard: React.FC<MovieCardProps> = ({data}) => {
  return (
    <View>
      <CustomImage path={data?.poster_path} />
      <Text className="text-white">{data?.title}</Text>
    </View>
  );
};

export default MovieCard;
