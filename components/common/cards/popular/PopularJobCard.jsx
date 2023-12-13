import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './popularjobcard.style';

const PopularJobCard = ({ item, selectJob, onCardPress }) => {
  return <TouchableOpacity style={styles.container(selectJob, item)}></TouchableOpacity>;
};

export default PopularJobCard;
