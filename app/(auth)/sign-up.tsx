import { StyleSheet, Text, View, Dimensions, Image, Pressable, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import React, { useState } from "react";
import InputField from "../../components/InputField";
import SharedButton from "../../components/SharedButton";
import { icons } from "@/constants";
import { Link, router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { setFullName, setUserEmail } from "../../redux/slices/UserSlice";

export default function SignUp() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    let userFullName = useSelector((state) => state.store.userReducer.fullName);
    let userEmail = useSelector((state) => state.store.userReducer.email);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const SubmitSignUp = () => {
        dispatch(setFullName(form.fullName));
        dispatch(setUserEmail(form.email));
        router.replace("/home");
    };
    return (
        <SafeAreaView className="bg-background h-full">
            <ScrollView>
                <View
                    className="w-full flex justfiy-center h-full px-4 my-6"
                    style={{ minHeight: Dimensions.get("window").height - 100 }}
                >
                    <View className="justify-center items-center relative flex-row mb-6">
                        <View className='absolute left-0'>
                            <Pressable
                                className="rounded-3xl p-2"
                                onPress={() => router.back()}
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
                    <KeyboardAvoidingView>

                    </KeyboardAvoidingView>
                    {/* <Text className="text-primary text-2xl w-full text-center font-pbold">
                        Fascal
                    </Text>
                    <Text className="text-xl font-semibold text-primary mt-4 font-psemibold">
                        Log in
                    </Text> */}

                    {/* <InputField
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
                    /> */}
                    {/* <SharedButton
                        title="Login"
                        handlePress={SubmitLogin}
                        buttonStyles={"bg-primary w-full mt-7"}
                        isLoading={isSubmitting}
                    /> */}
                    {/* <View className="justify-center items-center gap-2 flex-row pt-5">
                        <Text className="text-base font-pregular">
                            Don't have an account?
                        </Text>
                        <Link href="/sign-up" className="text-primary font-pbold text-lg">
                            Sign up
                        </Link>
                    </View> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
