import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../themes/colors';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Header: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex-row items-center justify-between pr-2">
      <Image
        source={require('../assets/images/netflixLogo.png')}
        className="w-16 h-16"
        resizeMode="contain"
      />
      <View className="flex-row items-center gap-8">
        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.Notifications)}>
          <Ionicons
            name="notifications-outline"
            size={32}
            color={colors.white}
          />
          <View className="bg-red w-5 h-5 absolute -top-1 -right-1 rounded-full items-center justify-center">
            <Text className="text-white">1</Text>
          </View>
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
