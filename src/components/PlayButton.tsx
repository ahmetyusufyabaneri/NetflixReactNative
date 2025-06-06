import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../themes/colors';

const PlayButton = () => {
  return (
    <TouchableOpacity className="button bg-white">
      <Ionicons name="play" size={24} color={colors.black} />
      <Text className="text-2xl font-semibold">Play</Text>
    </TouchableOpacity>
  );
};

export default PlayButton;
