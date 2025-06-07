import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../themes/colors';

const DownloadButton: React.FC = () => {
  return (
    <TouchableOpacity className="button bg-darkGrey">
      <Feather name="download" size={24} color={colors.softGrey} />
      <Text className="text-softGrey text-2xl font-semibold">Download</Text>
    </TouchableOpacity>
  );
};

export default DownloadButton;
