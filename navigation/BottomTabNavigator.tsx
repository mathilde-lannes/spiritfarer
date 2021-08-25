/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import * as React from "react";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ItemsScreen from "../screens/ItemsScreen";
import RecipesScreen from "../screens/RecipesScreen";
import {
  BottomTabParamList,
  ItemsParamList,
  MapParamList,
  RecipesParamList,
} from "../types";
import MapScreen from "../screens/MapScreen";

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
              name="folder-open"
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

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ItemsStack = createStackNavigator<ItemsParamList>();

function ItemsNavigator() {
  return (
    <ItemsStack.Navigator>
      <ItemsStack.Screen
        name="ItemsScreen"
        component={ItemsScreen}
        options={{ headerTitle: "Items" }}
      />
    </ItemsStack.Navigator>
  );
}

const RecipesStack = createStackNavigator<RecipesParamList>();

function RecipesNavigator() {
  return (
    <RecipesStack.Navigator>
      <RecipesStack.Screen
        name="RecipesScreen"
        component={RecipesScreen}
        options={{ headerTitle: "Recipes" }}
      />
    </RecipesStack.Navigator>
  );
}

const MapStack = createStackNavigator<MapParamList>();

function MapNavigator() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerTitle: "Map" }}
      />
    </MapStack.Navigator>
  );
}
