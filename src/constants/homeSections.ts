import {contentType} from '.';
import {HomeSections} from '../types';

export enum homeSectionsNames {
  topRatedMovies = 'TopRatedMovies',
  popularMovies = 'PopularMovies',
  topRatedTvShows = 'TopRatedTvShows',
  popularTvShows = 'PopularTvShows',
}

export const homeSections: HomeSections[] = [
  {
    id: 1,
    title: 'Top Rated Movies',
    section: homeSectionsNames.topRatedMovies,
    type: contentType.Movie,
  },
  {
    id: 2,
    title: 'Popular Movies',
    section: homeSectionsNames.popularMovies,
    type: contentType.Movie,
  },
  {
    id: 3,
    title: 'Top Rated TV Shows',
    section: homeSectionsNames.topRatedTvShows,
    type: contentType.TvShow,
  },
  {
    id: 4,
    title: 'Popular TV Shows',
    section: homeSectionsNames.popularTvShows,
    type: contentType.TvShow,
  },
];
