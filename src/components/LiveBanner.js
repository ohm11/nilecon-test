import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, radius } from "../theme/colors";

export default function LiveBanner({ channel, onPressPlay, onPressBack }) {
  return (
    <View style={styles.container}>
      {onPressBack ? (
        <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
          <Ionicons name="arrow-back" size={26} color={colors.text} />
        </TouchableOpacity>
      ) : null}

      <Text style={styles.channelLabel}>{channel.channelLabel}</Text>

      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.playerWrap}
        onPress={onPressPlay}
      >
        <Image source={{ uri: channel.image }} style={styles.image} />
        <View style={styles.playOverlay}>
          <View style={styles.playCircle}>
            <Ionicons name="play" size={28} color={colors.text} />
          </View>
        </View>
        <View style={styles.liveBadge}>
          <Text style={styles.liveBadgeText}>LIVE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  backButton: {
    position: "absolute",
    top: spacing.lg,
    left: spacing.lg,
    zIndex: 2,
  },
  channelLabel: {
    position: "absolute",
    top: spacing.xxl + spacing.lg,
    left: spacing.lg,
    zIndex: 2,
    color: colors.text,
    fontWeight: "700",
    fontSize: 16,
  },
  playerWrap: {
    width: "100%",
    aspectRatio: 16 / 10,
    backgroundColor: colors.surfaceAlt,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  playOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  playCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  liveBadge: {
    position: "absolute",
    top: spacing.md,
    right: spacing.md,
    backgroundColor: colors.live,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.sm,
  },
  liveBadgeText: {
    color: colors.text,
    fontWeight: "700",
    fontSize: 12,
  },
});
