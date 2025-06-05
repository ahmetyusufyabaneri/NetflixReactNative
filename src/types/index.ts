import {homeSectionsNames} from '../constants/homeSections';

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TVShow = {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type MovieSliceTypes = {
  pending: boolean;
  error: string | null | undefined;
  topRatedMovies: Movie[];
  popularMovies: Movie[];
};

export type TvShowSliceTypes = {
  pending: boolean;
  error: string | null | undefined;
  topRatedTvShows: TVShow[];
  popularTvShows: any;
};

export type HomeSections = {
  id: number;
  title: string;
  section: homeSectionsNames;
};

export type MovieCardProps = {
  data: Movie;
};

export type CustomImageProps = {
  path: string;
};

export type SectionTitleProps = {
  title: string;
};

export type MovieSectionProps = {
  data: HomeSections;
};

export type RootNavigatorScreens = {
  MovieDetail: {movie: object};
};
