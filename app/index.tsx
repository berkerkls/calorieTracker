import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View, Image } from "react-native";
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
                <View className="w-full justify-around items-center px-4 gap-0">
                    <Text className="text-primary text-4xl font-pbold">CTracker.</Text>
                    <Image
                        source={images.onboarding}
                        className="max-w-[2r80px] h-[268px]"
                        resizeMode="contain"
                    ></Image>

                    <View className="mt-5">
                        <Text className="text-2xl text-primary text-center">
                            Keep your diet or nutrient cycle organized with{" "}
                            <Text className="font-pbold text-2xl text-primary">
                                CTracker.
                            </Text>
                        </Text>
                        <Text className="text-sm text-primary font-pregular mt-7 text-center">
                            You can add nutrient value of your meal or what you ate and keep your diet organize.
                        </Text>
                    </View>

                    <SharedButton
                        title="Get Started with Email"
                        handlePress={() => router.push("/sign-in")}
                        buttonStyles={"bg-primary w-full mt-7"}
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#ebf2f9" style="dark" />
        </SafeAreaView>
    );
}
