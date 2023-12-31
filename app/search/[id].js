import React, { useState } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'

import { ScreenHeaderBtn, NearbyJobCard } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'
import useFetch from '../../hooks/useFetch'

const JobSearch = () => {
    const params = useGlobalSearchParams();
    const router = useRouter()

    const [page, setPage] = useState(1);

    const { data, error, isLoading, refetch } = useFetch('search', {
        query: params.id,
        num_pages: 1,
        page
    });

    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
            refetch()
        } else if (direction === 'right') {
            setPage(page + 1)
            refetch()
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />
            {isLoading ? (
                <View>
                    <Text style={{ textAlign: "center", marginBottom: 8 }}>Loading for page {page} ...</Text>
                </View>
            ) :
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <NearbyJobCard
                            job={item}
                            handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
                        />
                    )}
                    keyExtractor={(item) => item.job_id}
                    contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                    ListHeaderComponent={() => (
                        <>
                            <View style={styles.container}>
                                <Text style={styles.searchTitle}>{params.id}</Text>
                                <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
                            </View>
                            <View style={styles.loaderContainer}>
                                {error && (
                                    <Text>Oops something went wrong</Text>
                                )}
                            </View>
                        </>
                    )}
                    ListFooterComponent={() => (
                        <View style={styles.footerContainer}>
                            <TouchableOpacity
                                style={styles.paginationButton}
                                onPress={() => handlePagination('left')}
                            >
                                <Image
                                    source={icons.chevronLeft}
                                    style={styles.paginationImage}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <View style={styles.paginationTextBox}>
                                <Text style={styles.paginationText}>{page}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.paginationButton}
                                onPress={() => handlePagination('right')}
                            >
                                <Image
                                    source={icons.chevronRight}
                                    style={styles.paginationImage}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            }
        </SafeAreaView>
    )
}

export default JobSearch