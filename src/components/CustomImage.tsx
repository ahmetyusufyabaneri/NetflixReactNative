import {Image} from 'react-native';
import React from 'react';
import {imageBaseUrl} from '../services/constants/url';
import {CustomImageProps} from '../types';

const CustomImage: React.FC<CustomImageProps> = ({path, width, height}) => {
  return (
    <Image
      source={{uri: `${imageBaseUrl}${path}`}}
      width={width}
      height={height}
      className="rounded-xl"
      resizeMode="contain"
    />
  );
};

export default CustomImage;
