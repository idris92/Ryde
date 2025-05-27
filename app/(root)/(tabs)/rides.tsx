import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RideCard from '@/components/RideCard'
import { images } from '@/constants'

const Rides = () => {
  const [loading, setLoading] = useState(false)
  return (
    <SafeAreaView className=''>
        <FlatList
          data={[1,2,3,4]}
          renderItem={({ item }) => <RideCard/>}
          keyExtractor={(item, index) => index.toString()}
          className="px-5"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          ListEmptyComponent={() => (
            <View className="flex flex-col items-center justify-center">
              {!loading ? (
                <>
                  <Image
                    source={images.noResult}
                    className="w-40 h-40"
                    alt="No recent rides found"
                    resizeMode="contain"
                  />
                  <Text className="text-sm">No recent rides found</Text>
                </>
              ) : (
                <ActivityIndicator size="small" color="#000" />
              )}
            </View>
          )}
          ListHeaderComponent={
            <>
              <View className="flex flex-row items-center justify-between my-10">
                <Text className="text-2xl font-JakartaExtraBold">
                  Popular car
                </Text>
                
              </View>
            </>
          }
        />
    </SafeAreaView>
  )
}

export default Rides