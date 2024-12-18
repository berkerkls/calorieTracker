import { StyleSheet, Text, Platform, View, Dimensions, Image, Pressable, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import React, { useState } from "react";
import InputField from "../../components/InputField";
import SharedButton from "../../components/SharedButton";
import { icons } from "@/constants";
import { Link, router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { setFullName, setUserEmail } from "../../redux/slices/UserSlice";
import { images } from "@/constants";

export default function SignUp() {
    const dispatch = useDispatch();
    const [showEmailInputs, setShowEmailInputs] = useState(false)
    const [form, setForm] = useState({
        fullName: "Berker Kelesoglu",
        email: "berkerkelesoglu@gmail.com",
        password: "",
        confirmPassword: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const SubmitSignUp = () => {
        setIsSubmitting(true)
        dispatch(setFullName(form.fullName));
        dispatch(setUserEmail(form.email));
        router.replace("/home");
        setIsSubmitting(false)
    };
    return (
        <SafeAreaView className="bg-background h-full">
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="flex mx-4 my-6">
                        <View className="justify-center items-center relative flex-row mb-6">
                            <View className='absolute left-0'>
                                <Pressable
                                    className="rounded-3xl p-2"
                                    onPress={() => router.push('/(auth)/sign-in')}
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
                            <Image source={images.signup} resizeMode="contain" className="w-[362px] h-[235px]" />
                            <Text className="font-pbold text-3xl text-primary">Fascal</Text>
                            <Text className="font-pmedium text-md mt-2 text-[#cccccc]">Start to organize and your diet and fasting plan</Text>
                        </View>
                        {!showEmailInputs ? (
                            <>
                                <View className="flex-col justify-between items-center gap-4 mt-6">
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
                                                <Text className="text-black text-lg font-medium">Continue with Google</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View className="flex justify-center items-center bg-white px-4">
                                        <TouchableOpacity
                                            className="flex-row justify-center items-center bg-white shadow-md rounded-lg py-3"
                                        >
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Image
                                                    source={icons.apple}
                                                    style={{ width: 30, height: 30 }}
                                                />
                                            </View>
                                            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}>
                                                <Text className="text-black text-lg font-medium">Continue with Apple</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View className="flex justify-center items-center bg-white px-4 ">
                                        <TouchableOpacity
                                            onPress={() => setShowEmailInputs(true)}
                                            className="flex-row justify-center items-center bg-white shadow-md rounded-lg py-3"
                                        >
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Image
                                                    source={icons.account}
                                                    style={{ width: 30, height: 30 }}
                                                />
                                            </View>
                                            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}>
                                                <Text className="text-black text-lg font-medium">Continue with Email</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    <View className="flex-row items-center my-4">
                                        <View className="flex-1 h-px bg-gray-300" />
                                        <Text className="mx-2 text-gray-500 text-sm">or</Text>
                                        <View className="flex-1 h-px bg-gray-300" />
                                    </View>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <SharedButton
                                        title="Back to Login"
                                        handlePress={() => router.push('/(auth)/sign-in')}
                                        buttonStyles={"bg-primary  mt-7  shadow-md"}
                                    />
                                </View>
                            </>
                        ) : (<View>
                            <InputField
                                placeholder="Name"
                                value={form.fullName}
                                handleChangeText={(e: string) => setForm({ ...form, fullName: e })}
                                inputHeight="h-12"
                            // keyboardType="email-address"
                            />
                            <InputField
                                placeholder="Email"
                                value={form.email}
                                handleChangeText={(e: string) => setForm({ ...form, email: e })}
                                inputHeight="h-12"
                            // keyboardType="email-address"
                            />
                            <InputField
                                placeholder="Password"
                                value={form.password}
                                handleChangeText={(e: string) => setForm({ ...form, password: e })}
                                inputHeight="h-12"
                                isPassword={true}
                            // keyboardType="password"
                            />
                            <InputField
                                placeholder="Confirm Password"
                                value={form.confirmPassword}
                                handleChangeText={(e: string) => setForm({ ...form, confirmPassword: e })}
                                inputHeight="h-12"
                                isPassword={true}
                            // keyboardType="password"
                            />
                            <View className="flex-row justify-around items-center">
                                <SharedButton
                                    title="Back"
                                    handlePress={() => setShowEmailInputs(false)}
                                    buttonStyles={"bg-transparent border border-md  border-primary  mt-7 shadow-md px-8"}
                                    textStyles="text-primary"

                                />
                                <SharedButton
                                    title="Create an account"
                                    handlePress={SubmitSignUp}
                                    buttonStyles={"bg-primary mt-7 shadow-md px-8"}
                                    isLoading={isSubmitting}
                                />
                            </View>
                        </View>)}

                        {/* <View>
                            <SharedButton
                                title="Create an account"
                                handlePress={SubmitSignUp}
                                buttonStyles={"bg-primary w-full mt-7 shadow-md"}
                                isLoading={isSubmitting}
                            />
                            <View className="flex-row items-center my-4">
                                <View className="flex-1 w-px bg-gray-300" />
                                <Text className="mx-2 text-gray-500 text-sm">or</Text>
                                <View className="flex-1 h-px bg-gray-300" />
                            </View>
                            <View className="flex-1 justify-center items-center bg-white px-4">
                                <TouchableOpacity
                                    className="flex-row items-center bg-white shadow-md rounded-lg px-4 py-3"
                                >
                                    <Image
                                        source={icons.google}
                                        style={{ width: 24, height: 24, marginRight: 12 }}
                                    />
                                    <Text className="text-black text-base font-medium">Continue with Google</Text>
                                </TouchableOpacity>
                            </View>
                            <View className="justify-center items-center gap-2 flex-row pt-5">
                                <Text className="text-base font-pregular">
                                    Already have an account?
                                </Text>
                                <Link href="/sign-in" className="text-primary font-pbold text-lg">
                                    Login
                                </Link>
                            </View>
                        </View> */}
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
