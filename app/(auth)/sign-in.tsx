import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, Pressable, Image, Platform, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import React, { useState } from "react";
import InputField from "@/components/InputField";
import SharedButton from "@/components/SharedButton";
import { Link, router } from "expo-router";
import { icons, images } from '@/constants';

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
        <SafeAreaView className="bg-background h-full" >
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="flex mx-4 my-6">
                        <View className="justify-center items-center relative flex-row mb-6">
                            <View className='absolute left-0'>
                                <Pressable
                                    className="rounded-3xl p-2"
                                    onPress={() => router.push('/')}
                                >
                                    <Image
                                        source={icons.chevronLeft}
                                        className="h-7 w-7"
                                        resizeMode="contain"
                                        tintColor="#74cb83"
                                    />
                                </Pressable>
                            </View>
                        </View>
                        <View className="flex-col justify-center items-center">
                            <Image source={images.login} resizeMode="contain" className="w-[362px] h-[235px]" />
                            <Text className="font-pbold text-3xl text-primary">Welcome!</Text>
                        </View>
                        <View>
                            <InputField
                                placeholder="Email"
                                value={form.email}
                                handleChangeText={(e: string) => setForm({ ...form, email: e })}
                                inputHeight="h-14"
                            // keyboardType="email-address"
                            />
                            <InputField
                                placeholder="Password"
                                value={form.password}
                                handleChangeText={(e: string) => setForm({ ...form, password: e })}
                                otherStyles="mt-4"
                                inputHeight="h-14"
                                isPassword={true}
                            // keyboardType="password"
                            />
                        </View>
                        <View >
                            <SharedButton
                                title="Login"
                                handlePress={SubmitLogin}
                                buttonStyles={"bg-primary w-full mt-7 shadow-md"}
                                isLoading={isSubmitting}
                            />
                            <View className="flex-row items-center my-4">
                                <View className="flex-1 h-px bg-gray-300" />
                                <Text className="mx-2 text-gray-500 text-sm">or</Text>
                                <View className="flex-1 h-px bg-gray-300" />
                            </View>
                            <View className="flex justify-center items-center bg-white px-4">
                                <TouchableOpacity
                                    className="flex-row justify-center items-center bg-white shadow-md rounded-lg py-3"
                                >
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image
                                            source={icons.google}
                                            style={{ width: 30, height: 30 }}
                                        />
                                    </View>
                                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <Text className="text-black text-base font-medium">Continue with Google</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View className="justify-center items-center gap-2 flex-row pt-5">
                                <Text className="text-base font-pregular">
                                    Don't have an account?
                                </Text>
                                <Link href="/sign-up" className="text-primary font-pbold text-lg">
                                    Sign up
                                </Link>
                            </View>
                        </View>
                    </View>
                    {/* <View
                        className="flex-1 justify-center items-center"
                    >

                       
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
                    </View> */}
                </ScrollView>
            </KeyboardAvoidingView>

        </SafeAreaView>
    );
}
