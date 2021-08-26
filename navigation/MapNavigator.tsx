// @ts-nocheck
import { createStackNavigator } from "@react-navigation/stack";
import { MapParamList } from "../types";
import MapScreen from "../screens/MapScreen";
import * as React from "react";
import { StyleSheet } from "react-native";
import TabWithHeader from "./TabWithHeader";

const MapStack = createStackNavigator<MapParamList>();

const MapStackComponent = ({
  style,
  header,
}: {
  style: StyleSheet.NamedStyles<any>;
  header: ({ scene, previous, navigation }) => JSX.Element;
}) => (
  <MapStack.Navigator
    screenOptions={{
      header,
      cardStyle: { backgroundColor: "transparent" },
      tintColor: "#ffffff",
      headerMode: "screen",
    }}
  >
    <MapStack.Screen
      name="MapScreen"
      component={MapScreen}
      options={{
        headerTitle: "Map",
        headerStyle: style.headerStyle,
      }}
    />
  </MapStack.Navigator>
);

export function MapNavigator() {
  return (
    <TabWithHeader>
      <MapStackComponent />
    </TabWithHeader>
  );
}
