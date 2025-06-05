import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import SectionTitle from './SectionTitle';
import MovieCard from './MovieCard';
import {MovieSectionProps} from '../types';

const MovieSection: React.FC<MovieSectionProps> = ({data, movies}) => {
  return (
    <View>
      <SectionTitle title={data.title} />
      <FlatList
        data={movies}
        renderItem={({item}) => <MovieCard data={item} />}
        horizontal
      />
    </View>
  );
};

export default MovieSection;
