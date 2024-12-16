import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'
import { slideItem } from './Onboarding'

interface OnboardingItemProps {
    item: slideItem
}

const OnboardingItem = ({ item }: OnboardingItemProps) => {
    const width = Dimensions.get('window').width
    return (
        <View className=' flex justify-center items-center' style={{ width: width }}>
            <View className=' flex justify-between items-center h-2/3'>
                <Image source={item.image} resizeMode='contain' className='flex-[0.7] justiy-center ' />
                <View className='flex-[0.1]'>
                    <Text className='text-primary text-center font-pbold text-2xl'>{item.title}</Text>
                    <Text className='font-pmedium text-base mt-4'>{item.description}</Text>
                </View>
            </View>
        </View>
    )
}

export default OnboardingItem
