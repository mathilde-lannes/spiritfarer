// @ts-nocheck
import { createStackNavigator } from "@react-navigation/stack";
import { ItemsParamList } from "../types";
import TabWithHeader from "./TabWithHeader";
import { ImageBackground, StyleSheet } from "react-native";
import ItemsScreen from "../screens/ItemsScreen";
import ItemDetailsScreen from "../screens/ItemDetailsScreen";
import * as React from "react";
import { ReactElement } from "react";

const ItemsStack = createStackNavigator<ItemsParamList>();

const ItemsStackComponent = ({
  style,
  header,
}: {
  style: StyleSheet.NamedStyles<any>;
  header: ({ scene, previous, navigation }) => JSX.Element;
}) => (
  <ItemsStack.Navigator
    screenOptions={{
      header,
      cardStyle: { backgroundColor: "transparent" },
      headerTintColor: "#ffffff",
      headerMode: "screen",
    }}
  >
    <ItemsStack.Screen
      name="ItemsScreen"
      component={ItemsScreen}
      options={{
        headerTitle: "Items",
        headerStyle: style.headerStyle,
      }}
    />
    <ItemsStack.Screen
      name="ItemDetailsScreen"
      component={ItemDetailsScreen}
      options={{
        headerTitle: "Item details",
        headerStyle: style.headerStyle,
      }}
    />
  </ItemsStack.Navigator>
);

export function ItemsNavigator(): ReactElement {
  return (
    <TabWithHeader img={require("../assets/images/items.jpg")}>
      <ItemsStackComponent />
    </TabWithHeader>
  );
}
