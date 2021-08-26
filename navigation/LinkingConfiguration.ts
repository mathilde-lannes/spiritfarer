/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Items: {
            screens: {
              ItemsScreen: "items",
              ItemDetailsScreen: "item-details",
            },
          },
          Recipes: {
            screens: {
              RecipesScreen: "recipes",
              RecipeDetailsScreen: "recipe-details",
            },
          },
          Map: {
            screens: {
              MapScreen: "map",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
