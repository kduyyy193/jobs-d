import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import styles from './screenheader.style';

function ScreenHeaderBtn({ iconUrl, dimesion, handlePress }) {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimesion)}
      />
    </TouchableOpacity>
  );
}

export default ScreenHeaderBtn;
