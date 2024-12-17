import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'
import { slideItem } from './Onboarding'

interface OnboardingItemProps {
    item: slideItem
}

const OnboardingItem = ({ item }: OnboardingItemProps) => {
    const width = Dimensions.get('window').width
    return (
        <View style={{ width: width, display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={item.image} resizeMode='contain' className='w-[300px] h-[300px]' />
            <View className='flex-1'>
                <Text className='text-primary text-center font-pbold text-2xl'>{item.title}</Text>
                <Text className='font-pmedium text-base mt-4'>{item.description}</Text>
            </View>
        </View>
    )
}

export default OnboardingItem
