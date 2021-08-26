// @ts-nocheck
import { createStackNavigator } from "@react-navigation/stack";
import { RecipesParamList } from "../types";
import RecipesScreen from "../screens/RecipesScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import * as React from "react";
import { ReactElement } from "react";
import { StyleSheet } from "react-native";
import TabWithHeader from "./TabWithHeader";

const RecipesStack = createStackNavigator<RecipesParamList>();

const RecipesStackComponent = ({
  style,
  header,
}: {
  style: StyleSheet.NamedStyles<any>;
  header: ({ scene, previous, navigation }) => JSX.Element;
}) => (
  <RecipesStack.Navigator
    screenOptions={{
      header,
      cardStyle: { backgroundColor: "transparent" },
      tintColor: "#ffffff",
      headerMode: "screen",
    }}
  >
    <RecipesStack.Screen
      name="RecipesScreen"
      component={RecipesScreen}
      options={{
        headerTitle: "Recipes",
        headerStyle: style.headerStyle,
      }}
    />
    <RecipesStack.Screen
      name="RecipeDetailsScreen"
      component={RecipeDetailsScreen}
      options={{
        headerTitle: "Recipe details",
        headerStyle: style.headerStyle,
      }}
    />
  </RecipesStack.Navigator>
);

export function RecipesNavigator(): ReactElement {
  return (
    <TabWithHeader img={require("../assets/images/recipes.jpg")}>
      <RecipesStackComponent />
    </TabWithHeader>
  );
}
