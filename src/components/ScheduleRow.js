import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors, spacing, radius } from "../theme/colors";
import { STATUS } from "../utils/schedule";

export default function ScheduleRow({ item, onPress }) {
  const isCurrent = item.status === STATUS.CURRENT;
  const isPast = item.status === STATUS.PAST;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.row, isCurrent && styles.rowActive, isPast && styles.rowPast]}
    >
      <View style={[styles.pill, isCurrent ? styles.pillActive : styles.pillInactive]}>
        <Text style={styles.pillText}>{item.statusLabel}</Text>
      </View>
      <Text style={[styles.title, isPast && styles.textPast]}>{item.title}</Text>
      <Text style={[styles.time, isPast && styles.textPast]}>{item.timeLabel}</Text>
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
  rowPast: {
    opacity: 0.5,
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
  textPast: {
    color: colors.textFaint,
  },
});
