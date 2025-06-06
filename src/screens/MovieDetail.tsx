import {
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {getMovieDetailAction} from '../store/actions/movieAction';
import {getTvShowDetailAction} from '../store/actions/tvShowAction';
import {contentType} from '../constants';
import CustomImage from '../components/CustomImage';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../themes/colors';
import PlayButton from '../components/PlayButton';
import DownloadButton from '../components/DownloadButton';

type MovieDetailRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;

const MovieDetail: React.FC = () => {
  const {movie, type} = useRoute<MovieDetailRouteProp>().params;

  const navigation = useNavigation();

  const dispatch = useAppDispatch();

  const {movieDetail, pending, error} = useAppSelector(
    state => state.rootReducer.movie,
  );
  console.log('movieDetail:', movieDetail);

  const {tvShowDetail} = useAppSelector(state => state.rootReducer.tvShow);
  console.log('tvShowDetail:', tvShowDetail);

  useEffect(() => {
    if (type == contentType.Movie) {
      dispatch(getMovieDetailAction(movie?.id));
    } else if (type == contentType.TvShow) {
      dispatch(getTvShowDetailAction(movie?.id));
    }
  }, []);

  const {width} = Dimensions.get('window');

  return (
    <SafeAreaView className="container">
      {true ? (
        <Text>Pending..</Text>
      ) : error ? (
        <Text>Error</Text>
      ) : (
        <>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={40} color={colors.white} />
          </TouchableOpacity>
          <CustomImage
            path={
              type == contentType.Movie
                ? movieDetail?.backdrop_path
                : tvShowDetail?.backdrop_path
            }
            width={width}
            height={250}
          />
          <View className="items-center px-4">
            <Text className="text-white text-3xl font-bold">
              {type == contentType.Movie
                ? movieDetail?.title
                : tvShowDetail?.name}
            </Text>
          </View>
          <View className="flex-row items-center justify-evenly mt-4">
            <View className="flex-row gap-3">
              {type == contentType.Movie
                ? movieDetail?.genres?.slice(0, 3).map((genre, index) => (
                    <Text key={index} className="genreText">
                      {genre.name}
                    </Text>
                  ))
                : tvShowDetail?.genres?.slice(0, 3).map((genre, index) => (
                    <Text key={index} className="genreText">
                      {genre.name}
                    </Text>
                  ))}
            </View>
            <View>
              <Text className="text-softGrey text-lg">
                {movieDetail?.release_date.substring(0, 4)}
              </Text>
            </View>
            <View className="bg-white px-2 rounded-sm">
              <Text className="text-lg font-bold">HD</Text>
            </View>
          </View>
          <View className="gap-4 mt-4 px-1">
            <PlayButton />
            <DownloadButton />
          </View>
          <View className="gap-2 mt-4 px-1">
            <Text className="text-grey text-xl">
              {type == contentType.Movie
                ? movieDetail?.overview
                : tvShowDetail?.overview}
            </Text>
            <Text className="text-softGrey text-xl font-semibold">
              {type == contentType.Movie
                ? movieDetail?.tagline
                : tvShowDetail?.tagline}
            </Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default MovieDetail;
