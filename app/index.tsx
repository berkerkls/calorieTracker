import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, router } from "expo-router";
import { images } from ".././constants";
import SharedButton from "@/components/SharedButton";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";


export default function App() {
    const [fontsLoaded, fontsError] = useFonts({
        "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
        "Roboto-BlackItalic": require("../assets/fonts/Roboto-BlackItalic.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-BoldItalic": require("../assets/fonts/Roboto-BoldItalic.ttf"),
        "Roboto-Italic": require("../assets/fonts/Roboto-Italic.ttf"),
        "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
        "Roboto-LightItalic": require("../assets/fonts/Roboto-LightItalic.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-MediumItalic": require("../assets/fonts/Roboto-MediumItalic.ttf"),
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
        "Roboto-ThinItalic": require("../assets/fonts/Roboto-ThinItalic.ttf"),
    });

    if (fontsError) throw fontsError;

    SplashScreen.hideAsync();
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView
                contentContainerStyle={{
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View className="justify-center items-center">
                    <Pressable className="bg-primary px-4 rounded-xl" onPress={() => router.push('/(tabs)/home')} ><Text className="text-white">Here</Text></Pressable>
                </View>

            </ScrollView>
            <StatusBar backgroundColor="#ebf2f9" style="dark" />
        </SafeAreaView>
    );
}
