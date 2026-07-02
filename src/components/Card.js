import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { colors, spacing, radius } from "../theme/colors";

const RATIO = {
  poster: { width: 130, height: 182 }, // tall poster (Top10 / genre rows)
  landscape: { width: 220, height: 132 }, // replay / news thumbnails
  square: { width: 150, height: 150 }, // music covers
};

export default function Card({
  title,
  subtitle,
  image,
  rank,
  variant = "poster",
  onPress,
  style,
}) {
  const size = RATIO[variant] || RATIO.poster;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, { width: size.width }, style]}
    >
      <View style={[styles.imageWrap, { width: size.width, height: size.height }]}>
        <Image source={{ uri: image }} style={styles.image} />
        {rank ? (
          <Text style={styles.rank} numberOfLines={1}>
            {rank}
          </Text>
        ) : null}
      </View>
      {title ? (
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      ) : null}
      {subtitle ? (
        <Text style={styles.subtitle} numberOfLines={1}>
          {subtitle}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: spacing.md,
  },
  imageWrap: {
    borderRadius: radius.md,
    overflow: "hidden",
    backgroundColor: colors.surfaceAlt,
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  rank: {
    position: "absolute",
    bottom: -6,
    left: -4,
    fontSize: 56,
    fontWeight: "900",
    color: colors.text,
    opacity: 0.85,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  title: {
    color: colors.text,
    fontSize: 13,
    fontWeight: "600",
    marginTop: spacing.xs,
  },
  subtitle: {
    color: colors.textFaint,
    fontSize: 12,
    marginTop: 2,
  },
});
