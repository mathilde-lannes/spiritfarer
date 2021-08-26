/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import * as React from "react";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { BottomTabParamList } from "../types";
import { ItemsNavigator } from "./ItemsNavigator";
import { RecipesNavigator } from "./RecipesNavigator";
import { MapNavigator } from "./MapNavigator";

export const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): JSX.Element | null {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Items"
      shifting={true}
      activeColor={Colors[colorScheme].tint}
      barStyle={{ backgroundColor: "white" }}
    >
      <BottomTab.Screen
        name="Items"
        component={ItemsNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <MaterialCommunityIcons
              name="bag-personal"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Recipes"
        component={RecipesNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <MaterialCommunityIcons name="noodles" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
