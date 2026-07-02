import React from "react";
import GridListScreen from "./GridListScreen";
import { latestReplays } from "../data/mockData";

export default function ReplayScreen({ navigation }) {
  return <GridListScreen navigation={navigation} data={latestReplays} variant="landscape" />;
}
