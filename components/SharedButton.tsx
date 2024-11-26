import { Text, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";
import React from "react";

interface SharedButtonType {
    buttonStyles: string,
    textStyles?: string,
    title: string,
    isLoading?: boolean,
    handlePress: Function
}

export default function SharedButton({
    buttonStyles,
    textStyles,
    title,
    isLoading,
    handlePress,
}: SharedButtonType) {
    return (
        <TouchableOpacity
            onPress={() => handlePress()}
            activeOpacity={0.7}
            className={`rounded-xl min-h-[62px] flex flex-row justify-center items-center ${buttonStyles} ${isLoading ? "opacity-50" : ""
                }`}
            disabled={isLoading}
        >
            <Text className={`text-light font-psemibold text-lg ${textStyles}`}>
                {!isLoading && title}
            </Text>
            {isLoading && (
                <ActivityIndicator
                    animating={isLoading}
                    color="#fff"
                    size="small"
                    className="ml-2"
                />
            )}
        </TouchableOpacity>
    );
}
