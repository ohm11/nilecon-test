import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, spacing } from "../theme/colors";

/**
 * Reusable blank screen.
 * Any button/card in the app that doesn't have real content yet
 * navigates here, passing a `title` param for the header only.
 */
export default function PlaceholderScreen({ route, navigation }) {
  const title = route?.params?.title ?? "หน้านี้";

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.subText}>ยังไม่มีข้อมูลในหน้านี้</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.xl,
  },
  text: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: spacing.sm,
    textAlign: "center",
  },
  subText: {
    color: colors.textFaint,
    fontSize: 14,
  },
});
