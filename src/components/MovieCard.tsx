import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MovieCardProps} from '../types';
import CustomImage from './CustomImage';

const MovieCard: React.FC<MovieCardProps> = ({data}) => {
  return (
    <TouchableOpacity>
      <CustomImage path={data?.poster_path} />
    </TouchableOpacity>
  );
};

export default MovieCard;
