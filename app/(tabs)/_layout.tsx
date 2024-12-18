import React from "react";
import { Tabs } from "expo-router";
import { View, StyleSheet, Image } from "react-native";
import { icons } from "@/constants";

const TabIcon = ({ icon, color, focused, isCenter }: any) => {
  console.log('color', color)
  return (
    <View
      style={[
        styles.iconContainer,
        focused && styles.centerTab,
        focused && styles.activeTab,
      ]}
    >
      <Image
        source={icon}
        style={[styles.icon, { tintColor: color }]}
        resizeMode="contain"
      />
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#333", // Active icon color
        tabBarInactiveTintColor: "#74cb83", // Inactive icon color

      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.home} color={color} focused={focused} />

          ),
        }}
      />
      <Tabs.Screen
        name="fasting"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.fasting} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="mealplan"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.diet} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.account} color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    backgroundColor: "#e6e6e6cc",
    borderTopWidth: 0,
    elevation: 0,
    borderRadius: 30,
    position: "absolute",
    marginHorizontal: 20,
    bottom: 40,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    top: 8,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  centerTab: {
    borderRadius: 30,
    backgroundColor: "#F9E070", // Yellow background
  },
  activeTab: {
    tintColor: '#74cb83'
  },
  icon: {
    width: 30,
    height: 30,
  },
});
