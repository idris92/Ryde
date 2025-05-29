import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Swiper from "react-native-swiper";

import { onboarding } from "@/constants";
import CustomButton from '@/components/CustomButton';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Welcome = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <ScrollView>
      <SafeAreaView className="flex w-full h-full items-center justify-between bg-white p-5">
  
          <TouchableOpacity
            onPress={() => {
              router.replace("/signup");
            }}
            className="w-full flex justify-end items-end"
          >
            <Text className="text-black text-md font-JakartaBold">Skip</Text>
          </TouchableOpacity>

          <Swiper
            ref={swiperRef}
            loop={false}
            dot={
              <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
            }
            activeDot={
              <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full"  />
            }
            onIndexChanged={(index) => setActiveIndex(index)}
            style={{height:hp('80%')}}
            
          >
            {onboarding.map((item) => (
              <View key={item.id} className="flex items-center justify-center py-5 w-full">
                <Image
                  source={item.image}
                  className="w-full "
                  resizeMode="contain"
                  style={{height:hp('37%')}}
                />
                <View className="flex items-center justify-center w-full mt-10 px-10">
                  <Text className="text-black font-bold  text-center w-full" style={{fontSize:hp('3.4%')}}>
                    {item.title}
                  </Text>
                </View>
                <View className='w-full flex items-center justify-center mt-5 px-5'>
                    <Text className="text-md font-JakartaSemiBold text-center text-[#858585]" style={{fontSize:hp('2.1%')}}>
                      {item.description}
                    </Text>
                </View>
              </View>
            ))}
          </Swiper>
          <View className='w-full items-center justify-center' >
              <CustomButton
                title={isLastSlide ? "Get Started" : "Next"}
                onPress={() =>
                  isLastSlide
                    ? router.replace('/signin')
                    : swiperRef.current?.scrollBy(1)
                }
                className="mt-10 mb-5"
                
              />
          </View>
    </SafeAreaView>
     </ScrollView>
  )
}

export default Welcome