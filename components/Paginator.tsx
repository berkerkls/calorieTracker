import { View, Text, Dimensions, Animated } from 'react-native'
import React from 'react'
import { slideItem } from './Onboarding'

interface PaginatoreProps {
    slides: Array<slideItem>
    scrollX: Animated.Value
}

const Paginator = ({ slides, scrollX }: PaginatoreProps) => {
    const width = Dimensions.get('window').width
    return (
        <View className='flex-row justify-center items-center height-[200px]'>
            {slides && slides.map((item, index) => {
                const inputRange = [(index - 1) * width, index * width, (index + 1) * width]

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp'
                })
                return <Animated.View style={{ width: dotWidth, height: 10, borderRadius: 5, backgroundColor: '#74cb83', marginHorizontal: 8 }} key={index.toString()} />
            })}
        </View>
    )
}

export default Paginator