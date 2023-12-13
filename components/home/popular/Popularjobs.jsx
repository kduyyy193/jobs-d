import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './popularjobs.style';
import useFetch from '../../../hooks/useFetch';

function Popularjobs() {
  const router = useRouter();

  const { data, error, isLoading, refetch } = useFetch('search', {
    query: 'react developer',
    num_pages: 1,
    page: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}> Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="small" />
        ) : error ? (
          <Text>Something went wrong!</Text>
        ) : (
          <FlatList />
        )}
      </View>
    </View>
  );
}

export default Popularjobs;
