import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "./Card";
import { spacing } from "../theme/colors";

export default function HorizontalCardList({ data, variant, onItemPress, showRank }) {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.content}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
          rank={showRank ? item.rank : undefined}
          variant={variant}
          onPress={() => onItemPress(item)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.lg,
  },
});
