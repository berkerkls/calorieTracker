import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import React, { useState } from 'react'
import { icons, images } from '@/constants'
import moment from "moment";

const DashboardTopBar = () => {
    const [count, setCounr] = useState(2)
    const fullName = useSelector((state: RootState) => state.store.userReducer.fullName);
    const todaysDate = moment(new Date()).format('dddd, MMMM YYYY')

    return (
        <View className='flex-row justify-between items-center w-full'>
            <View className='flex-col justify-start items-start gap-1'>
                <Text className='text-lg font-pbold'>{`Hello, ${fullName.split(" ")[0]}`}</Text>
                <Text className="font-pmedium text-md mt-2 text-[#cccccc]">{todaysDate}</Text>
            </View>
            <View className='relative flex-row justify-end items-center gap-4'>
                <TouchableOpacity className="relative w-10 h-10 items-center justify-center">
                    <View className='bg-gray-100 w-10 h-10 justify-center items-center rounded-3xl'>
                        <Image
                            source={icons.bell}
                            className="w-6 h-6"
                            resizeMode='contain'
                            tintColor={'#a6a6a6'}
                        />
                    </View>
                    {count > 0 && (
                        <View className="absolute top-0 right-0 bg-black w-3 h-3 rounded-full border-2 border-white items-center justify-center">
                        </View>
                    )}
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={images.johndoe} className='w-10 h-10 rounded-3xl' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DashboardTopBar

const styles = StyleSheet.create({})