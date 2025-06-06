import {contentType} from '../constants';
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

export type MovieDetailGenre = {
  id: number;
  name: string;
};

export type MovieDetailProductionCompany = {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
};

export type MovieDetailProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type MovieDetailSpokenLanguage = {
  iso_639_1: string;
  name: string;
};

export type MovieDetail = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: any | null;
  budget: number;
  genres: MovieDetailGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: MovieDetailProductionCompany[];
  production_countries: MovieDetailProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: MovieDetailSpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TvShowDetailCreator = {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string | null;
};

export type TvShowDetailGenre = {
  id: number;
  name: string;
};

export type TvShowDetailNetwork = {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
};

export type TvShowDetailProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type TvShowDetailProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type TvShowDetailSpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type TvShowDetailEpisode = {
  air_date: string;
  episode_number: number;
  episode_type: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
};

export type TvShowDetailSeason = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
};

export type TVShowDetail = {
  adult: boolean;
  backdrop_path: string | null;
  created_by: TvShowDetailCreator[];
  episode_run_time: number[];
  first_air_date: string;
  genres: TvShowDetailGenre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: TvShowDetailEpisode;
  name: string;
  networks: TvShowDetailNetwork[];
  next_episode_to_air: TvShowDetailEpisode | null;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: TvShowDetailProductionCompany[];
  production_countries: TvShowDetailProductionCountry[];
  seasons: TvShowDetailSeason[];
  spoken_languages: TvShowDetailSpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

export type MovieSliceTypes = {
  pending: boolean;
  error: string | null | undefined;
  topRatedMovies: Movie[];
  popularMovies: Movie[];
  movieDetail: MovieDetail | null;
};

export type TvShowSliceTypes = {
  pending: boolean;
  error: string | null | undefined;
  topRatedTvShows: TVShow[];
  popularTvShows: TVShow[];
  tvShowDetail: TVShowDetail | null;
};

export type HomeSections = {
  id: number;
  title: string;
  section: homeSectionsNames;
  type: contentType;
};

export type MovieCardProps = {
  data: Movie;
  content: contentType;
};

export type CustomImageProps = {
  path: string | undefined | null;
  width: number;
  height: number;
};

export type SectionTitleProps = {
  title: string;
};

export type MovieSectionProps = {
  data: HomeSections;
};

export type RootNavigatorScreens = {
  MovieDetail: {movie: Movie | TVShow; type: contentType};
};

export type RootStackParamList = {
  MovieDetail: {movie: Movie | TVShow; type: contentType};
  Notifications: undefined;
};
