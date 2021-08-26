import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Button } from "react-native";

export default function ItemsScreen({ navigation }: any): JSX.Element | null {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>omg r u working ??</Text>
      <View style={styles.container}>
        <Text style={styles.title}>Items</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("ItemDetailsScreen")}
        />

        <EditScreenInfo path="/screens/ItemsScreen.tsx" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "transparent",
  },
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
