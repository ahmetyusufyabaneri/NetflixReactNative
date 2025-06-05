import {FlatList, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import MovieSection from '../components/MovieSection';
import {homeSections} from '../constants/homeSections';

const Home: React.FC = () => {
  return (
    <SafeAreaView className="container">
      <Header />
      <Subheader />
      <FlatList
        data={homeSections}
        renderItem={({item}) => <MovieSection data={item} />}
        contentContainerClassName="gap-8"
      />
    </SafeAreaView>
  );
};

export default Home;
