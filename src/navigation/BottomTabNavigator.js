import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import HighlightScreen from "../screens/HighlightScreen";
import ReplayScreen from "../screens/ReplayScreen";
import NewsScreen from "../screens/NewsScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import { colors } from "../theme/colors";
import { bottomTabs } from "../data/mockData";

const Tab = createBottomTabNavigator();

const ICONS = {
  live: "tv",
  highlight: "play-circle",
  replay: "albums",
  news: "newspaper",
  schedule: "calendar",
};

const TITLES = {
  LiveTab: bottomTabs.find((t) => t.id === "live").label,
  HighlightTab: bottomTabs.find((t) => t.id === "highlight").label,
  ReplayTab: bottomTabs.find((t) => t.id === "replay").label,
  NewsTab: bottomTabs.find((t) => t.id === "news").label,
  ScheduleTab: bottomTabs.find((t) => t.id === "schedule").label,
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name !== "LiveTab",
        headerStyle: { backgroundColor: colors.background },
        headerTitleStyle: { color: colors.text },
        headerTintColor: colors.text,
        tabBarStyle: { backgroundColor: colors.background, borderTopColor: colors.border },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textFaint,
        title: TITLES[route.name],
        tabBarIcon: ({ color, size }) => {
          const key = route.name.replace("Tab", "").toLowerCase();
          return <Ionicons name={ICONS[key]} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="LiveTab" component={HomeScreen} options={{ tabBarLabel: "ดูทีวีสด" }} />
      <Tab.Screen name="HighlightTab" component={HighlightScreen} options={{ tabBarLabel: "ไฮไลท์" }} />
      <Tab.Screen name="ReplayTab" component={ReplayScreen} options={{ tabBarLabel: "รายการย้อนหลัง" }} />
      <Tab.Screen name="NewsTab" component={NewsScreen} options={{ tabBarLabel: "ข่าวสาร" }} />
      <Tab.Screen name="ScheduleTab" component={ScheduleScreen} options={{ tabBarLabel: "ผังรายการ" }} />
    </Tab.Navigator>
  );
}
