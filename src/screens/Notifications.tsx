import {SafeAreaView, FlatList, Text} from 'react-native';
import React from 'react';
import {useAppSelector} from '../store/hooks';

const Notifications: React.FC = () => {
  const {pending, notifications} = useAppSelector(
    state => state.rootReducer.notification,
  );

  return (
    <SafeAreaView>
      <FlatList
        data={notifications}
        renderItem={({item}) => <Text>Notification</Text>}
      />
    </SafeAreaView>
  );
};

export default Notifications;
