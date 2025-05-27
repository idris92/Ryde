import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons, images } from '@/constants'

const RideCard = () => {
  return (
    <View className="flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3">
    <View className="flex flex-col items-start justify-center p-3">
      <View className="flex flex-row items-center justify-between">
        <Image
          source={images.mapComplete} 
          className="w-[80px] h-[90px] rounded-lg"
        />

        <View className="flex flex-col mx-5 gap-y-5 flex-1">
          <View className="flex flex-row items-center gap-x-2">
            <Image source={icons.to} className="w-5 h-5" />
            <Text className="text-md font-JakartaMedium" numberOfLines={1}>
             1901 Thornridge Cir. Shiloh
            </Text>
          </View>

          <View className="flex flex-row items-center gap-x-2">
            <Image source={icons.point} className="w-5 h-5" />
            <Text className="text-md font-JakartaMedium" numberOfLines={1}>
                4140 Parker Rd. Allentown
            </Text>
          </View>
        </View>
      </View>

      <View className="flex flex-col w-full mt-5 bg-general-500 rounded-lg p-3 items-start justify-center">
        <View className="flex flex-row items-center w-full justify-between mb-5">
          <Text className="text-md font-JakartaMedium text-gray-500">
            Date & Time
          </Text>
          <Text className="text-md font-JakartaBold" numberOfLines={1}>
          16 July 2023, 10:30 PM
          </Text>
        </View>

        <View className="flex flex-row items-center w-full justify-between mb-5">
          <Text className="text-md font-JakartaMedium text-gray-500">
            Driver
          </Text>
          <Text className="text-md font-JakartaBold">
            Idris Babatunde
          </Text>
        </View>

        <View className="flex flex-row items-center w-full justify-between mb-5">
          <Text className="text-md font-JakartaMedium text-gray-500">
            Car Seats
          </Text>
          <Text className="text-md font-JakartaBold">
            5
          </Text>
        </View>

        <View className="flex flex-row items-center w-full justify-between">
          <Text className="text-md font-JakartaMedium text-gray-500">
            Payment Status
          </Text>
          <Text
            className={`text-md capitalize font-JakartaBold ${"paid" === "paid" ? "text-green-500" : "text-red-500"}`}
          >
            success
          </Text>
        </View>
      </View>
    </View>
  </View>
  )
}

export default RideCard