import * as React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "../components/Themed";
import ItemChip from "../components/ItemChip";
import Quote from "../components/Quote";

export default function ItemDetailsScreen({
  navigation,
  route,
}: any): JSX.Element | null {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.badges}>
          <ItemChip text={"Tuna"} color={"danger"} />
          <ItemChip text={"450 lights"} color={"subtle"} />
          <ItemChip text={"Huge"} color={"accent"} />
        </View>

        <Image
          style={styles.image}
          source={require("../assets/images/Sockeye_Salmon.webp")}
        />
      </View>
      <View style={styles.container}>
        <Quote
          text={
            "This huge bluefin tuna scares the lights out of me. I like this fish better on a plate of sushi."
          }
        />
        <Text>{route.params?.name}</Text>
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
    paddingTop: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  badges: {
    backgroundColor: "transparent",
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "flex-start", // 30 % from the bottom
    alignSelf: "flex-start",
    flexWrap: "wrap",
  },
  image: {
    flex: 0.3,
    width: 110,
    height: 110,
    resizeMode: "contain",
    position: "absolute",
    right: 20,
    top: -40,
  },
  header: {
    backgroundColor: "transparent",
    flexDirection: "row",
    height: 80,
    marginTop: 10,
    marginLeft: 15,
  },
});
