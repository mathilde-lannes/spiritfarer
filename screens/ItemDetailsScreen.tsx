import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Button } from "react-native";

export default function ItemDetailsScreen({
  navigation,
  route,
}: any): JSX.Element | null {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params?.name || "Details"}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="Go back" onPress={() => navigation.pop()} />

      <EditScreenInfo path="/screens/ItemsScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
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