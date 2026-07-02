import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing } from "../theme/colors";

export default function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate("Menu")}
        accessibilityLabel="เปิดเมนู"
      >
        <Ionicons name="menu" size={26} color={colors.text} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("LiveTab")}>
        <View style={styles.logoBadge}>
          <Text style={styles.logoText}>WP</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate("Search")}
        accessibilityLabel="ค้นหา"
      >
        <Ionicons name="search" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.background,
  },
  iconButton: {
    padding: spacing.xs,
  },
  logoBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.surfaceAlt,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: colors.text,
    fontWeight: "700",
  },
});
