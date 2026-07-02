import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "./BottomTabNavigator";
import MenuScreen from "../screens/MenuScreen";
import SearchScreen from "../screens/SearchScreen";
import LiveDetailScreen from "../screens/LiveDetailScreen";
import PlaceholderScreen from "../screens/PlaceholderScreen";
import { colors } from "../theme/colors";

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.background,
    card: colors.background,
    text: colors.text,
    border: colors.border,
    primary: colors.primary,
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTitleStyle: { color: colors.text },
          headerTintColor: colors.text,
        }}
      >
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ headerShown: false, presentation: "modal" }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false, presentation: "modal" }}
        />
        <Stack.Screen
          name="LiveDetail"
          component={LiveDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Placeholder"
          component={PlaceholderScreen}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
