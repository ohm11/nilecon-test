import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, radius } from "../theme/colors";

export function NowPlayingRow({ channel }) {
  return (
    <View style={styles.nowPlayingWrap}>
      <View style={styles.statusPill}>
        <Text style={styles.statusDot}>•</Text>
        <Text style={styles.statusText}>{channel.status}</Text>
      </View>
      <Text style={styles.programTitle}>{channel.programTitle}</Text>
      <Text style={styles.timeText}>{channel.time}</Text>
    </View>
  );
}

export function ChannelPromoBanner({ onPressSchedule }) {
  return (
    <View style={styles.promoBanner}>
      <View>
        <Text style={styles.promoText}>ช่อง เวิร์คพอยท์</Text>
        <Text style={styles.promoText}>กด หมายเลข</Text>
      </View>
      <View style={styles.channelBadge}>
        <Text style={styles.channelNumber}>23</Text>
      </View>
      <TouchableOpacity style={styles.scheduleButton} onPress={onPressSchedule}>
        <Text style={styles.scheduleButtonText}>ผังรายการ</Text>
        <Ionicons name="chevron-forward" size={16} color={colors.background} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nowPlayingWrap: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: colors.live,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.sm,
  },
  statusDot: {
    color: colors.text,
    marginRight: 4,
    fontWeight: "900",
  },
  statusText: {
    color: colors.text,
    fontWeight: "700",
    fontSize: 12,
  },
  programTitle: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "700",
    marginTop: spacing.md,
  },
  timeText: {
    color: colors.accentBlue,
    marginTop: spacing.xs,
  },
  promoBanner: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.gradientStart,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing.lg,
  },
  promoText: {
    color: colors.text,
    fontWeight: "700",
  },
  channelBadge: {
    backgroundColor: colors.text,
    borderRadius: radius.pill,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  channelNumber: {
    fontWeight: "900",
    fontSize: 18,
  },
  scheduleButton: {
    backgroundColor: colors.text,
    borderRadius: radius.pill,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  scheduleButtonText: {
    fontWeight: "700",
    marginRight: 2,
  },
});
