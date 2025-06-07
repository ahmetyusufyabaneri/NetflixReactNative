import {View, Text} from 'react-native';
import React from 'react';

const Error: React.FC = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-softGrey text-3xl">An error occured!</Text>
    </View>
  );
};

export default Error;
