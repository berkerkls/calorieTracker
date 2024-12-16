import {
    FlatList,
    ImageSourcePropType,
    SafeAreaView,
    StyleSheet,
    Text,
    View, Animated, ViewToken
} from "react-native";
import { images } from "@/constants";
import OnboardingItem from "./OnboardingItem";
import { useRef, useState } from "react";
import Paginator from "./Paginator";
import SharedButton from "./SharedButton";
import { router } from "expo-router";

export interface slideItem {
    id: string;
    title: string;
    description: string;
    image: ImageSourcePropType;
}

const slides: Array<slideItem> = [
    {
        id: "1",
        title: "Welcome to Fascal",
        description: "Your partner in organizing diet and fasting routines",
        image: images.onboarding1,
    },
    {
        id: "2",
        title: "Track Your Calories",
        description: "Log meals easily and monitor your intake.",
        image: images.onboarding2,
    },
    {
        id: "3",
        title: "Master Fasting Goals",
        description: "Track progress and maintain fasting streaks.",
        image: images.onboarding3,
    },
];

const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(0)
    const scrollX = useRef(new Animated.Value(0)).current
    const slideRef = useRef(null)
    const viewableItemsChange = useRef((info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
        const viewable = info.viewableItems[0]
        setCurrentIndex(viewable.index)
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
    return (
        <SafeAreaView className="flex justify-between items-center">
            <View className="flex-1">
                <FlatList
                    data={slides}
                    renderItem={({ item }) =>
                        <OnboardingItem item={item} />
                    }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item: slideItem) => item.id}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChange}
                    viewabilityConfig={viewConfig}
                    ref={slideRef}
                />
                <Paginator slides={slides} scrollX={scrollX} />
            </View>
            <View className="flex-[0.5]">
                <View className="flex justify-center items-center mt-14">
                    <SharedButton
                        title="Get Started"
                        buttonStyles={"bg-primary w-full mt-7"}
                        textStyles="text-center font-pbold"
                        handlePress={() => router.push('/(auth)/sign-in')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Onboarding;

const styles = StyleSheet.create({});
