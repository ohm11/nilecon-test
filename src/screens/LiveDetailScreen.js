import React, { useMemo } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LiveBanner from "../components/LiveBanner";
import { NowPlayingRow } from "../components/ChannelInfo";
import ScheduleRow from "../components/ScheduleRow";
import { liveChannel, todaySchedule } from "../data/mockData";
import { withLiveStatus, getCurrentProgram, formatThaiDate } from "../utils/schedule";
import useNow from "../utils/useNow";
import { colors, spacing } from "../theme/colors";

export default function LiveDetailScreen({ navigation }) {
  const now = useNow(); // ticks every minute, so on-air status never goes stale

  const scheduleWithStatus = useMemo(() => withLiveStatus(todaySchedule, now), [now]);
  const currentProgram = useMemo(() => getCurrentProgram(todaySchedule, now), [now]);
  const dateLabel = useMemo(() => formatThaiDate(now), [now]);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LiveBanner
          channel={liveChannel}
          videoMode
          onPressBack={() => navigation.goBack()}
        />
        <NowPlayingRow program={currentProgram} />

        <Text style={styles.sectionTitle}>รายการวันนี้</Text>
        <Text style={styles.sectionDate}>{dateLabel}</Text>

        {scheduleWithStatus.map((item) => (
          <ScheduleRow
            key={item.id}
            item={item}
            onPress={() => navigation.navigate("Placeholder", { title: item.title })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "700",
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl,
  },
  sectionDate: {
    color: colors.textMuted,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xs,
    marginBottom: spacing.lg,
  },
});
