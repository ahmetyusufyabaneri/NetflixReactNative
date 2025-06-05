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
  },
  {
    id: 2,
    title: 'Popular Movies',
    section: homeSectionsNames.popularMovies,
  },
  {
    id: 3,
    title: 'Top Rated TV Shows',
    section: homeSectionsNames.topRatedTvShows,
  },
  {
    id: 4,
    title: 'Popular TV Shows',
    section: homeSectionsNames.popularTvShows,
  },
];
