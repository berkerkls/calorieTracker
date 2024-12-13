import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { icons } from "../constants/index";
import React from "react";

interface InputFieldType {
    title?: string,
    buttonStyles?: string,
    handleChangeText: Function,
    placeholder?: string,
    otherStyles?: string | null,
    value: string,
    inputHeight: string,
    isPassword?: boolean
}

const InputField = ({
    title,
    value,
    handleChangeText,
    placeholder,
    otherStyles,
    inputHeight,
    isPassword,
    ...props
}: InputFieldType) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-600">{title}</Text>
            <View className={`w-full border-2 border-gray-400 px-4 bg-black-100 flex-row rounded-2xl items-center focus:border-primary ${inputHeight}`}>
                <TextInput
                    className="flex-1 text-dark font-bsemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#4444"
                    onChangeText={() => handleChangeText()}
                    secureTextEntry={isPassword && !showPassword}
                    autoCapitalize={title === 'Email' || placeholder === 'Email' ? 'none' : undefined}
                />
                {isPassword && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeoff}
                            className=" flex-1 h-5 w-5 "
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default InputField;
