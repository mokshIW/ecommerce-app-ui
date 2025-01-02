import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

type Props = {};

const SignUpScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>SignUp Screen</Text>
      <TouchableOpacity
        onPress={() => {
          router.dismissAll();
          router.push("/(tabs)");
        }}
      >
        <Text>Go to App Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
