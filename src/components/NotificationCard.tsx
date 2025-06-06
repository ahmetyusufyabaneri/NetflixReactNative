import {View, Text} from 'react-native';
import React from 'react';
import {NotificationCardProps} from '../types';

const NotificationCard: React.FC<NotificationCardProps> = ({data}) => {
  return (
    <View>
      <Text className="text-white">{data?.title}</Text>
    </View>
  );
};

export default NotificationCard;
