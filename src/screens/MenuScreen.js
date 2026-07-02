import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing } from "../theme/colors";

const MENU_ITEMS = [
  { id: "home", label: "หน้าแรก", icon: "home" },
  { id: "live", label: "ดูทีวีสด", icon: "tv" },
  { id: "highlight", label: "ไฮไลท์", icon: "play-circle" },
  { id: "replay", label: "รายการย้อนหลัง", icon: "albums" },
  { id: "news", label: "ข่าวสาร", icon: "newspaper" },
  { id: "schedule", label: "ผังรายการ", icon: "calendar" },
  { id: "contact", label: "ติดต่อเรา", icon: "call" },
  { id: "about", label: "เกี่ยวกับเรา", icon: "information-circle" },
];

export default function MenuScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={26} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>เมนู</Text>
        <View style={{ width: 26 }} />
      </View>

      {MENU_ITEMS.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.row}
          onPress={() => navigation.navigate("Placeholder", { title: item.label })}
        >
          <Ionicons name={item.icon} size={20} color={colors.text} style={styles.rowIcon} />
          <Text style={styles.rowLabel}>{item.label}</Text>
          <Ionicons name="chevron-forward" size={18} color={colors.textFaint} />
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  headerTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  rowIcon: {
    marginRight: spacing.md,
  },
  rowLabel: {
    flex: 1,
    color: colors.text,
    fontSize: 16,
  },
});
