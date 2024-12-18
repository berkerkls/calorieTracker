import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { icons } from "../../constants";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import SearchInput from "../../components/SearchInput";
import DashboardTopBar from "@/components/DashboardTopBar";
import DashboardCaloriesChart from "@/components/DashboardCaloriesChart";
import { RootState } from "@/redux/store";
import NutritionalValuesCard from "@/components/NutritionalValuesCard";


export default function Home() {
  const fullName = useSelector((state: RootState) => state.store.userReducer.fullName);

  return (
    <SafeAreaView className="bg-background h-full px-4">
      <View className="flex-col justify-center items-center gap-5 ">
        <View className="justify-center items-center">
          <DashboardTopBar />
        </View>
        <View className="mt-12 bg-primary w-full rounded-3xl justify-center items-center">
          <DashboardCaloriesChart />
        </View>
        <View className="mt-12 bg-[#212121] w-full rounded-3xl justify-center items-center">
          <NutritionalValuesCard />
        </View>
      </View>
    </SafeAreaView>
  );
}
