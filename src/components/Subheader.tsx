import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../themes/colors';

const Subheader: React.FC = () => {
  return (
    <View className="flex-row items-center justify-between px-4 mt-8 mb-12">
      <TouchableOpacity>
        <Text className="subheader-title">TV Shows</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="subheader-title">Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center gap-2">
        <Text className="subheader-title">Categories</Text>
        <AntDesign name="caretdown" size={18} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default Subheader;
