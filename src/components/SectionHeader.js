import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing } from "../theme/colors";

export default function SectionHeader({ title, onSeeAll }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {onSeeAll ? (
        <TouchableOpacity style={styles.seeAll} onPress={onSeeAll}>
          <Text style={styles.seeAllText}>ดูเพิ่มเติม</Text>
          <Ionicons name="chevron-forward" size={16} color={colors.text} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "700",
  },
  seeAll: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    color: colors.textMuted,
    marginRight: 2,
  },
});
