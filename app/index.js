import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {
  Welcome,
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
} from '../components';

import {
  COLORS,
  SIZES,
  images,
  icons,
} from '../constants';


function Home() {

  const router = useRouter()
  const [search, setSearch] = useState()

  const handleSearch = () => {
    if (search) {
      router.push(`/search/${search}`)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite, height: 56, },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimesion="100%" />
          ),
          headerTitle: '',
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          flex: 1,
          padding: SIZES.medium,
        }}
        >
          <Welcome handleSearch={handleSearch} search={search} setSearch={setSearch} />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
