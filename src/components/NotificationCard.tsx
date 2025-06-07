import {View, Text} from 'react-native';
import React from 'react';
import {NotificationCardProps} from '../types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../themes/colors';

const NotificationCard: React.FC<NotificationCardProps> = ({data}) => {
  return (
    <View className="flex-1 flex-row items-center gap-6 px-2.5 py-4 border-b-[0.5px] border-grey">
      <View>
        <Ionicons name="notifications-outline" size={32} color={colors.white} />
        {!data?.read && (
          <View className="bg-red w-5 h-5 absolute -top-1 -right-1 rounded-full" />
        )}
      </View>
      <View className="flex-1">
        <View className="flex-row items-center justify-between">
          <Text className="text-white text-xl">{data?.title}</Text>
          <Text className="text-white text-xl">{data?.time}</Text>
        </View>
        <View>
          <Text className="text-white text-lg">{data?.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;
