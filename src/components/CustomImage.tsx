import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {imageBaseUrl} from '../services/constants/url';
import {CustomImageProps} from '../types';

const CustomImage: React.FC<CustomImageProps> = ({path}) => {
  return (
    <Image
      source={{uri: `${imageBaseUrl}${path}`}}
      className="w-36 h-48 rounded-xl"
      resizeMode="contain"
    />
  );
};

export default CustomImage;
