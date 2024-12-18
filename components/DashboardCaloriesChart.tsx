import { images } from "@/constants";
import React from "react";
import { View, Text, Image } from "react-native";
import * as Progress from "react-native-progress";

const DashboardCaloriesChart = () => {
    return (
        <View className="py-4 gap-4 flex-row justify-around items-center">
            <View className="justify-center items-center">
                <View className="justify-center items-center gap-2">
                    <Progress.Circle
                        progress={0.64} // 64% filled
                        size={135}
                        thickness={20}
                        color="#fff" /* Foreground color */
                        unfilledColor="#B8E0A5" /* Background color */
                        borderWidth={0}
                        strokeCap="round"
                        showsText={true}
                        textStyle={{ fontWeight: 'bold' }}

                    />

                    <Text className="font-pbold text-white text-xs" >
                        1280 kcal intake for today!
                    </Text>
                </View>
            </View>
            <View className="justify-center items-center">
                <View className="relative justify-center items-center gap-2">
                    <Image source={images.timerfasting} style={{ width: 135, height: 135 }} tintColor={'#3B8536'} />
                    <Text className="font-pbold text-white text-xs" style={{ color: '#3B8536' }}>
                        2 hours till your fasting ends!
                    </Text>

                </View>
            </View>

        </View>
    )
}

export default DashboardCaloriesChart
