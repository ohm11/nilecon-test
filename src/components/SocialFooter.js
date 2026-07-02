import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { socialLinks } from "../data/mockData";
import { colors, spacing } from "../theme/colors";

export default function SocialFooter({ onPressLink }) {
  return (
    <View style={styles.row}>
      {socialLinks.map((link) => (
        <TouchableOpacity
          key={link.id}
          style={styles.iconCircle}
          onPress={() => onPressLink(link)}
        >
          <Ionicons name={link.icon} size={20} color={colors.text} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing.xl,
    marginBottom: spacing.xl,
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.surfaceAlt,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: spacing.sm,
  },
});
