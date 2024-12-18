import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";

export default function Profile() {
    const fullName = useSelector((state: RootState) => state.store.userReducer.fullName);

    return (
        <SafeAreaView className="bg-background h-full">
            <Text>Profile</Text>
        </SafeAreaView>
    );
}
