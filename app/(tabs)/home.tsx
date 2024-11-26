import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { icons } from "../../constants";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import SearchInput from "../../components/SearchInput";
import FavoriteCitySlider from "../../components/FavoriteCitySlider";
import { RootState } from "@/redux/store";

export default function Home() {
  const fullName = useSelector((state: RootState) => state.store.userReducer.fullName);

  return (
    <SafeAreaView className="bg-background h-full">
      <View className="my-6 px-4 space-y-6">
        <View className="justify-between items-start flex-row mb-6">
          <View>
            <Text className="font-pmedium text-sm  text-primary">Welcome!</Text>
            <Text className="text-lg font-psemibold text-primary">
              {fullName && fullName}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              className="bg-primary rounded-lg"
              onPress={() => router.replace("/profile")}
            >
              <Image
                source={icons.account}
                className="h-8 w-8 pa-12"
                resizeMode="contain"
                tintColor="#ebf2f9"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* <SearchInput placeholder="Search city, museum or any place..." /> */}
      </View>
      <View className="flex flex-col justify-center items-center">
        <FavoriteCitySlider />
      </View>
    </SafeAreaView>
  );
}
