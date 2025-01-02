import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";

export const icon: Record<
  RouteName,
  ({ color }: { color: string }) => JSX.Element
> = {
  index: ({ color }) => (
    <Ionicons name="home-outline" size={22} color={color} />
  ),
  explore: ({ color }) => (
    <Ionicons name="search-outline" size={22} color={color} />
  ),
  notifications: ({ color }) => (
    <Ionicons name="notifications-outline" size={22} color={color} />
  ),
  cart: ({ color }) => <Ionicons name="cart-outline" size={22} color={color} />,
  profile: ({ color }) => (
    <Image
      source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=male" }}
      style={styles.userImg}
    />
  ),
};
const styles = StyleSheet.create({
  userImg: {
    width: 24,
    height: 24,
    borderRadius: 20,
  },
});

export type RouteName =
  | "index"
  | "explore"
  | "notifications"
  | "cart"
  | "profile";
