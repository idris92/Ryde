import { View, Text, ScrollView, Image, SafeAreaView } from 'react-native'
import React from 'react'
import InputField from '@/components/InputField'
import { images } from '@/constants'

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 mt-5">
        <ScrollView
        className="px-5"
        contentContainerStyle={{ paddingBottom: 120 }}
        >
        <Text className="text-2xl font-JakartaBold my-5">My profile</Text>

        <View className="flex items-center justify-center my-5">
            <Image
            source={images.profileImage}
            style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
            className=" rounded-full h-[110px] w-[110px] border-[3px] border-white shadow-sm shadow-neutral-300"
            />
        </View>

        <View className="flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
            <View className="flex flex-col items-start justify-start w-full">
                <InputField
                    label="First name"
                    placeholder='Idris'
                    containerStyle="w-full"
                    inputStyle="p-3.5"
                    editable={false}
                />

                <InputField
                    label="Last name"
                    placeholder='Babatunde'
                    containerStyle="w-full"
                    inputStyle="p-3.5"
                    editable={false}
                />

                <InputField
                    label="Email"
                    placeholder='idrisdoyin@gmail.com'
                    containerStyle="w-full"
                    inputStyle="p-3.5"
                    editable={false}
                />

                <InputField
                    label="Phone"
                    placeholder='08030492399'
                    containerStyle="w-full"
                    inputStyle="p-3.5"
                    editable={false}
                />
             </View>
        </View>
        </ScrollView>
  </SafeAreaView>
  )
}

export default Profile