import React from "react";
import GridListScreen from "./GridListScreen";
import { newsItems } from "../data/mockData";

export default function NewsScreen({ navigation }) {
  return <GridListScreen navigation={navigation} data={newsItems} variant="landscape" />;
}
