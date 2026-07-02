import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LiveBanner from "../components/LiveBanner";
import { NowPlayingRow } from "../components/ChannelInfo";
import ScheduleRow from "../components/ScheduleRow";
import { liveChannel, todaySchedule } from "../data/mockData";
import { colors, spacing } from "../theme/colors";

export default function LiveDetailScreen({ navigation }) {
  const today = new Date().toLocaleDateString("th-TH-u-ca-buddhist", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LiveBanner
          channel={liveChannel}
          onPressBack={() => navigation.goBack()}
          onPressPlay={() =>
            navigation.navigate("Placeholder", { title: liveChannel.programTitle })
          }
        />
        <NowPlayingRow channel={liveChannel} />

        <Text style={styles.sectionTitle}>รายการวันนี้</Text>
        <Text style={styles.sectionDate}>วัน{today}</Text>

        {todaySchedule.map((item) => (
          <ScheduleRow
            key={item.id}
            item={item}
            onPress={() =>
              navigation.navigate("Placeholder", { title: item.title })
            }
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
