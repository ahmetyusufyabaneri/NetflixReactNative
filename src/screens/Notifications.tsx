import {SafeAreaView, FlatList, Text} from 'react-native';
import React from 'react';
import {useAppSelector} from '../store/hooks';
import NotificationCard from '../components/NotificationCard';

const Notifications: React.FC = () => {
  const {pending, notifications} = useAppSelector(
    state => state.rootReducer.notification,
  );

  return (
    <SafeAreaView className="container">
      <FlatList
        data={notifications}
        renderItem={({item}) => <NotificationCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default Notifications;
