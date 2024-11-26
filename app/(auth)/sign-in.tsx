import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import React, { useState } from "react";
import InputField from "@/components/InputField";
import SharedButton from "@/components/SharedButton";
import { Link, router } from "expo-router";

interface SignInFormType {
    email: string,
    password: string
}

export default function SignIn() {
    const [form, setForm] = useState<SignInFormType>({
        email: "",
        password: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const SubmitLogin = () => {
        console.log("form", form);
        router.navigate("../(tabs)/home")
    };
    return (
        <SafeAreaView className="bg-light h-full">
            <ScrollView>
                <View
                    className="w-full flex justfiy-center h-full px-4 my-6"
                    style={{ minHeight: Dimensions.get("window").height - 100 }}
                >
                    <Text className="text-primary text-2xl w-full text-center font-pbold">
                        CTracker.
                    </Text>
                    <Text className="text-xl font-semibold text-primary mt-4 font-psemibold">
                        Log in
                    </Text>

                    <InputField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e: string) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                    // keyboardType="email-address"
                    />
                    <InputField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e: string) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    // keyboardType="password"
                    />
                    <SharedButton
                        title="Login"
                        handlePress={SubmitLogin}
                        buttonStyles={"bg-primary w-full mt-7"}
                        isLoading={isSubmitting}
                    />
                    <View className="justify-center items-center gap-2 flex-row pt-5">
                        <Text className="text-base font-pregular">
                            Don't have an account?
                        </Text>
                        <Link href="/sign-up" className="text-primary font-pbold text-lg">
                            Sign up
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
