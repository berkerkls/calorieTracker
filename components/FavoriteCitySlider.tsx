import {
    View,
    Text,
    FlatList,
    Pressable,
    Image,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { images } from "../constants";

const FavoriteCitySlider = () => {
    const [favoriteCities, setFavoriteCities] = useState([
        {
            source: images.italy,
            name: "Venedik",
        },
        {
            source: images.italy,
            name: "Copenhagen",
        },
        {
            source: images.italy,
            name: "Amsterdam",
        },
        {
            source: images.italy,
            name: "Milan",
        },
        {
            source: images.italy,
            name: "Istanbul",
        },
        {
            source: images.italy,
            name: "Paris",
        },
        {
            source: images.italy,
            name: "Prague",
        },
        {
            source: images.italy,
            name: "Berlin",
        },
    ]);

    const handleCardClick = (item) => {
        console.log("item", item);
    };

    return (
        <View className="flex-col px-6 py-4">
            <View className="mb-2">
                <Text className="font-psemibold">Your Favorite Cities</Text>
            </View>
            <View>
                <FlatList
                    horizontal={true}
                    data={favoriteCities}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View className="mx-4  rounded-3xl h-32 w-32 justify-center">
                            <TouchableOpacity
                                className={`rounded-xl flex flex-row justify-start gap-2 items-center w-full`}
                                onPress={() => handleCardClick(item)}
                            >
                                <View className="w-full h-32 rounded-lg overflow-hidden">
                                    <ImageBackground
                                        source={item.source}
                                        className="flex-1 justify-center items-center"
                                    >
                                        {/* Dark overlay */}
                                        <View className="absolute inset-0 bg-black/50" />
                                        {/* City name */}
                                        <Text className="text-white text-small font-bold z-10">
                                            {item.name}
                                        </Text>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

export default FavoriteCitySlider;
