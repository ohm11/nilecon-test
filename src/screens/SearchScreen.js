import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, radius } from "../theme/colors";

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    navigation.navigate("Placeholder", {
      title: query.trim() ? `ผลการค้นหา: ${query.trim()}` : "ผลการค้นหา",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={colors.text} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder="ค้นหารายการ, ข่าว, เพลง..."
          placeholderTextColor={colors.textFaint}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
          autoFocus
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={22} color={colors.text} />
        </TouchableOpacity>
      </View>
      <Text style={styles.hint}>พิมพ์คำค้นหาแล้วกด Enter หรือไอคอนแว่นขยาย</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  input: {
    flex: 1,
    color: colors.text,
    marginHorizontal: spacing.md,
    fontSize: 15,
  },
  hint: {
    color: colors.textFaint,
    textAlign: "center",
    marginTop: spacing.lg,
  },
});
