import { View, Text, SafeAreaView, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/constants';
import RideCard from '@/components/RideCard';
import { router } from 'expo-router';
import InputField from '@/components/InputField';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Home = () => {
    const [loading, setLoading] = useState(false)
    const handleDestinationPress=()=>{}
    const handleSignOut=()=>{
        router.replace('/signin')
    }
  return (
    <SafeAreaView className="bg-general-500">
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
          <View className='flex flex-col'>
            <View className="flex flex-row items-center justify-between my-10">
              <Text className="text-2xl font-JakartaExtraBold">
                Welcome Dragovic👋
              </Text>
              <TouchableOpacity
                onPress={handleSignOut}
                className="justify-center items-center w-10 h-10 rounded-full bg-white"
              >
                <Image source={icons.out} className="w-4 h-4" />
              </TouchableOpacity>
            </View>

            {/* <InputField label='' icon={icons.search} placeholder='where do you want to go'/> */}

            <View className='w-full flex items-center justify-center'>
              <Text className="text-xl font-JakartaBold mt-5 mb-3">
                Your current location
              </Text>
              <View className="flex items-center bg-transparent w-full " >
                    <Image source={images.availableRide} resizeMode='cover' className='w-full h-[300]'/>
              </View>
            </View>

            <Text className="text-xl font-JakartaBold mt-5 mb-3">
              Recent Rides
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  )
}

export default Home