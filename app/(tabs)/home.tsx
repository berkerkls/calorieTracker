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
      <Text>Home</Text>
    </SafeAreaView>
  );
}
