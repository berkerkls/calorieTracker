import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { icons } from "../constants/index";
import React from "react";

interface SearchInputType {
    title?: string,
    value: string,
    handleChangeText: Function,
    placeholder: string,
    otherStyles: string
}

const SearchInput = ({
    title,
    value,
    handleChangeText,
    placeholder,
    otherStyles,
    ...props
}: SearchInputType) => {
    return (
        <View className="w-full border-2 border-primary h-16 px-4 bg-black-100 space-x-4 flex-row rounded-2xl items-center focus:border-primary">
            <TextInput
                className="flex-1 text-dark font-pregular text-base mt-0.5"
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#4444"
                onChangeText={() => handleChangeText}
            />
            <TouchableOpacity>
                <Image
                    source={icons.search}
                    className="w-6 h-6"
                    tintColor="#3d85c6"
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
};

export default SearchInput;
