import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, router } from "expo-router";
import { images } from ".././constants";
import SharedButton from "@/components/SharedButton";


export default function App() {
    return (
        <SafeAreaView className="bg-light h-full">
            <ScrollView
                contentContainerStyle={{
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View className="w-full justify-around items-center px-4 gap-0">
                    <Text className="text-primary text-4xl font-pbold">Travelar.</Text>
                    <Image
                        source={images.onboarding}
                        className="max-w-[2r80px] h-[268px]"
                        resizeMode="contain"
                    ></Image>

                    <View className="mt-5">
                        <Text className="text-2xl text-primary text-center">
                            Save all places you encounter with{" "}
                            <Text className="font-pbold text-2xl text-primary">
                                Travelar.
                            </Text>
                        </Text>
                        <Text className="text-sm text-primary font-pregular mt-7 text-center">
                            You can easily save your favorite places, explore new places and
                            create travel routes for your new destination with Travelar.
                        </Text>
                    </View>

                    <SharedButton
                        title="Get Started with Email"
                        handlePress={() => router.navigate("/sign-in")}
                        buttonStyles={"bg-primary w-full mt-7"}
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#ebf2f9" style="dark" />
        </SafeAreaView>
    );
}
