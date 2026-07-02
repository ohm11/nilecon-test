import React from "react";
import GridListScreen from "./GridListScreen";
import { top10, featuredVideos } from "../data/mockData";

export default function HighlightScreen({ navigation }) {
  const data = [...top10, ...featuredVideos.map((v) => ({ ...v, id: `fv-${v.id}` }))];
  return <GridListScreen navigation={navigation} data={data} variant="poster" />;
}
