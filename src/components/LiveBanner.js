import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";
import { colors, spacing, radius } from "../theme/colors";

// Public sample clip used purely as a stand-in ("mock up") for the real live stream.
const MOCK_VIDEO_SOURCE = {
  uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
};

/**
 * Live channel banner.
 *
 * - videoMode = false (default): static poster + a play button that just
 *   fires `onPressPlay` (used on the Home feed, where tapping navigates to
 *   the full Live detail screen).
 * - videoMode = true: renders an actual inline mock video (play/pause,
 *   mute, loading state) — used on the Live detail screen itself.
 */
export default function LiveBanner({ channel, onPressPlay, onPressBack, videoMode = false }) {
  return (
    <View style={styles.container}>
      {onPressBack ? (
        <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
          <Ionicons name="arrow-back" size={26} color={colors.text} />
        </TouchableOpacity>
      ) : null}

      <Text style={styles.channelLabel}>{channel.channelLabel}</Text>

      {videoMode ? (
        <MockVideoPlayer channel={channel} />
      ) : (
        <TouchableOpacity activeOpacity={0.85} style={styles.playerWrap} onPress={onPressPlay}>
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
      )}
    </View>
  );
}

function MockVideoPlayer({ channel }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const togglePlay = () => setIsPlaying((prev) => !prev);
  const toggleMute = () => setIsMuted((prev) => !prev);

  return (
    <View style={styles.playerWrap}>
      <Video
        ref={videoRef}
        source={MOCK_VIDEO_SOURCE}
        style={styles.image}
        resizeMode={ResizeMode.COVER}
        shouldPlay={isPlaying}
        isMuted={isMuted}
        isLooping
        onLoadStart={() => setIsLoading(true)}
        onReadyForDisplay={() => setIsLoading(false)}
        // If the mock stream ever fails to load (e.g. offline), fall back
        // to the poster image so the layout never looks broken.
        posterSource={{ uri: channel.image }}
        usePoster
      />

      <TouchableOpacity
        style={styles.tapCatcher}
        activeOpacity={1}
        onPress={togglePlay}
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.text} />
        ) : !isPlaying ? (
          <View style={styles.playCircle}>
            <Ionicons name="play" size={28} color={colors.text} />
          </View>
        ) : null}
      </TouchableOpacity>

      <View style={styles.liveBadge}>
        <Text style={styles.liveBadgeText}>LIVE</Text>
      </View>

      <TouchableOpacity style={styles.muteButton} onPress={toggleMute}>
        <Ionicons name={isMuted ? "volume-mute" : "volume-high"} size={18} color={colors.text} />
      </TouchableOpacity>

      <Text style={styles.mockLabel}>ตัวอย่างวิดีโอ (mock up)</Text>
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
  tapCatcher: {
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
  muteButton: {
    position: "absolute",
    bottom: spacing.md,
    right: spacing.md,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  mockLabel: {
    position: "absolute",
    bottom: spacing.md,
    left: spacing.md,
    color: colors.textFaint,
    fontSize: 11,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.sm,
  },
});
