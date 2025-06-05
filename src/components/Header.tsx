import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../themes/colors';

const Header: React.FC = () => {
  return (
    <View className="flex-row items-center justify-between pr-2">
      <Image
        source={require('../assets/images/netflixLogo.png')}
        className="w-16 h-16"
        resizeMode="contain"
      />
      <View className="flex-row items-center gap-8">
        <TouchableOpacity>
          <Feather name="cast" size={32} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" size={32} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/user.png')}
            className="w-10 h-10"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
