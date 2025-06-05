import {View, Text} from 'react-native';
import React from 'react';
import {SectionTitleProps} from '../types';

const SectionTitle: React.FC<SectionTitleProps> = ({title}) => {
  return (
    <View className="mb-6 ml-1">
      <Text className="text-white text-2xl font-bold">{title}</Text>
    </View>
  );
};

export default SectionTitle;
