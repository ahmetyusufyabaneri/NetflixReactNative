export interface Movie {
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
}

export interface TVShow {
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
}

export interface MovieSliceTypes {
  pending: boolean;
  error: string | null | undefined;
  topRatedMovies: Movie[];
}

export interface TvShowSliceTypes {
  pending: boolean;
  error: string | null | undefined;
  topRatedTvShows: TVShow[];
}

export interface HomeSections {
  id: number;
  title: string;
}

export interface MovieCardProps {
  data: Movie;
}

export interface CustomImageProps {
  path: string;
}

export interface SectionTitleProps {
  title: string;
}

export interface MovieSectionProps {
  data: HomeSections;
  movies: Movie[];
}
