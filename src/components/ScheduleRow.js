import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors, spacing, radius } from "../theme/colors";

export default function ScheduleRow({ item, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.row, item.active && styles.rowActive]}
    >
      <View style={[styles.pill, item.active ? styles.pillActive : styles.pillInactive]}>
        <Text style={styles.pillText}>{item.status}</Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  rowActive: {
    backgroundColor: colors.accentBlue,
  },
  pill: {
    alignSelf: "flex-start",
    borderRadius: radius.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
    marginBottom: spacing.md,
  },
  pillActive: {
    backgroundColor: colors.live,
  },
  pillInactive: {
    backgroundColor: colors.surfaceAlt,
  },
  pillText: {
    color: colors.text,
    fontWeight: "700",
    fontSize: 12,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: spacing.xs,
  },
  time: {
    color: colors.textMuted,
  },
});
