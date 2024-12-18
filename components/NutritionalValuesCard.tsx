import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Progress from "react-native-progress";

const NutritionalValuesCard = () => {
    const [nutritionalTargets, setNutritionalTargets] = useState([
        {
            nutritient: "Carbs",
            totalIntake: "88",
            targetValue: "120",
        },
        {
            nutritient: "Protein",
            totalIntake: "24",
            targetValue: "70"
        },
        {
            nutritient: "Fat",
            totalIntake: "32",
            targetValue: "55"
        },
    ])

    const calculatePercentage = (totalIntake: string, targetValue: string) => {
        const percentage = ((+totalIntake * 100) / +targetValue) / 100
        return percentage
    }
    return (
        <View className='flex-row justify-start items-center gap-6'>
            {nutritionalTargets.map((item: any) => (
                <View className='flex justify-start items-start gap-2 py-2'>
                    <View className='flex-row'>
                        <Text className='text-2xl font-pblack text-white'>{item.totalIntake}</Text>
                        <Text className='text-md font-pmedium text-gray-400 ml-1'>{`/${item.targetValue}`}</Text>
                    </View>
                    <View className='flex-col'>
                        <Text className='text-gray-400'>{item.nutritient}</Text>
                    </View>
                    <View className='flex-col'>
                        <Progress.Bar progress={calculatePercentage(item.totalIntake, item.targetValue)} width={80} color="#fff"
                            borderWidth={0}
                            unfilledColor="#909090"
                        ></Progress.Bar>
                    </View>
                </View>
            ))}
        </View>
    )
}

export default NutritionalValuesCard