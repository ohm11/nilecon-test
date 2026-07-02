import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import { colors, spacing } from "../theme/colors";

/**
 * Generic 2-column grid screen.
 * Pass `data` (array of {id,title,subtitle,image}) and a `variant`.
 * Every card taps through to the shared PlaceholderScreen.
 */
export default function GridListScreen({ navigation, data, variant = "poster" }) {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            variant={variant}
            style={styles.card}
            onPress={() => navigation.navigate("Placeholder", { title: item.title })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    marginRight: 0,
    marginBottom: spacing.lg,
  },
});
