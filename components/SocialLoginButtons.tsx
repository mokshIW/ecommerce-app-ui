import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Google from "@/assets/images/google-logo.svg";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Href, Link } from "expo-router";

type Props = {
  emailHref: Href;
};

const SocialLoginButtons = (props: Props) => {
  const { emailHref } = props;
  return (
    <>
      <View style={styles.socialLoginWrapper}>
        <Animated.View entering={FadeInDown.delay(300).duration(500)}>
          <Link href={emailHref} asChild>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="mail-outline" size={20} color={Colors.black} />
              <Text style={styles.btnTxt}>Continue with Email</Text>
            </TouchableOpacity>
          </Link>
        </Animated.View>
      </View>

      <View style={styles.socialLoginWrapper}>
        <Animated.View entering={FadeInDown.delay(700).duration(500)}>
          {/* <Link href={"/signup"} asChild> */}
          <TouchableOpacity style={styles.button}>
            <Google width={20} height={20} />
            <Text style={styles.btnTxt}>Continue with Google</Text>
          </TouchableOpacity>
          {/* </Link> */}
        </Animated.View>
      </View>

      <View style={styles.socialLoginWrapper}>
        <Animated.View entering={FadeInDown.delay(900).duration(500)}>
          {/* <Link href={"/signup"} asChild> */}
          <TouchableOpacity style={styles.button}>
            <Ionicons name="logo-apple" size={20} color={Colors.black} />
            <Text style={styles.btnTxt}>Continue with Apple</Text>
          </TouchableOpacity>
          {/* </Link> */}
        </Animated.View>
      </View>
    </>
  );
};

export default SocialLoginButtons;

const styles = StyleSheet.create({
  socialLoginWrapper: {
    alignSelf: "stretch",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginBottom: 15,
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
  },
});
