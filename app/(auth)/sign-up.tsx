import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import React, { useState } from "react";
import InputField from "../../components/InputField";
import SharedButton from "../../components/SharedButton";
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
        <SafeAreaView className="bg-light">
            <ScrollView>
                <View
                    className="w-full flex justfiy-center px-4 my-6"
                    style={{ minHeight: Dimensions.get("window").height - 100 }}
                >
                    <Text className="text-primary text-2xl w-full text-center font-pbold">
                        CTracker.
                    </Text>
                    <Text className="text-xl font-semibold text-primary mt-4 font-psemibold">
                        Create an account
                    </Text>

                    <InputField
                        title="Fullname"
                        value={form.fullName}
                        handleChangeText={(e) => setForm({ ...form, fullName: e })}
                        otherStyles="mt-5"
                    />
                    <InputField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-5"
                        keyboardType="email-address"
                    />
                    <InputField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-5"
                        keyboardType="password"
                    />
                    <SharedButton
                        title="Get Started"
                        handlePress={SubmitSignUp}
                        buttonStyles={"bg-primary w-full mt-7"}
                        isLoading={isSubmitting}
                    />
                    <View className="justify-center items-center gap-2 flex-row pt-5">
                        <Text className="text-base font-pregular">
                            Already have an account?
                        </Text>
                        <Link href="/sign-in" className="text-primary font-pbold text-lg">
                            Sign in
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
