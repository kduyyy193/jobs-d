import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';

import { COLORS, icons, SIZES } from '../../../constants';

import styles from './welcome.style';

const jobsTypes = ['Fulltime', 'Part-time', 'Contractor'];

function Welcome({search, setSearch, handleSearch}) {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Fulltime');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello K2</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholder="What are you looking for?"
            placeholderTextColor={COLORS.primary}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Image source={icons.search} style={styles.searchBtnImage} resizeMode="cover" />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobsTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
}

export default Welcome;
