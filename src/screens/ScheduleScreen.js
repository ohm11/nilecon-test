import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScheduleRow from "../components/ScheduleRow";
import { todaySchedule } from "../data/mockData";
import { colors, spacing } from "../theme/colors";

export default function ScheduleScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Text style={styles.title}>ผังรายการวันนี้</Text>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {todaySchedule.map((item) => (
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
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "700",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  content: {
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
});
