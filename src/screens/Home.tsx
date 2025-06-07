import {Alert, FlatList, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import MovieSection from '../components/MovieSection';
import {homeSections} from '../constants/homeSections';
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';

const Home: React.FC = () => {
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();

    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log('Token:', token);
    }
  };

  useEffect(() => {
    const init = async () => {
      await requestUserPermission();
    };

    init();

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new message here', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

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
