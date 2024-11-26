import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants/index";
import { StatusBar } from "expo-status-bar";
const TabIcon = ({ icon, color, name, focused }: any) => {
  return (
    <View className="items-center justify-center">
      <Image
        source={icon}
        tintColor={color}
        resizeMode="contain"
        className="w-6 h-6"
      ></Image>
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#3d85c6",
          tabBarInactiveTintColor: "#b1cee8",
          tabBarStyle: {
            backgroundColor: "#ebf2f9",
            borderTopColor: "#ebf2f9",
            borderTopWidth: 1,
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.home}
                  name="Home"
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.search}
                  name="Explore"
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.plus}
                  name="Create"
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.bookmark}
                  name="Bookmark"
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.account}
                  name="Profile"
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#ebf2f9" style="dark" />
    </>
  );
}
