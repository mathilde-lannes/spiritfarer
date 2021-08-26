import * as React from "react";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export default function RecipesScreen({ navigation }: any): JSX.Element | null {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Items", {
            screen: "ItemDetailsScreen",
            params: {
              name: "My fav item",
            },
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
