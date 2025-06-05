import {Image} from 'react-native';
import React from 'react';
import {imageUrl} from '../services/constants/url';
import {CustomImageProps} from '../types';

const CustomImage: React.FC<CustomImageProps> = ({path}) => {
  return (
    <Image
      source={{uri: `${imageUrl}${path}`}}
      className="w-36 h-36"
      resizeMode="contain"
    />
  );
};

export default CustomImage;
