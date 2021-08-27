import * as React from "react";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "../components/Themed";
import ItemChip from "../components/ItemChip";
import Quote from "../components/Quote";
import Fish from "../db/fish";
import { getFishImg } from "../utils/images/fishes";

export default function ItemDetailsScreen({
  navigation,
  route,
}: any): JSX.Element | null {
  const [fish, setFish] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const fishFromDB = await Fish.find(route.params?.name[0]);
      setFish(fishFromDB);
    };
    getData();
  }, [route.params]);

  if (!fish) {
    return <Text>loading...</Text>;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.badges}>
          <ItemChip text={fish.category} color={"danger"} />
          <ItemChip text={fish.price + " lights"} color={"subtle"} />
          <ItemChip text={fish.size} color={"accent"} />
        </View>

        <Image style={styles.image} source={getFishImg(fish.id)} />
      </View>
      <View style={styles.container}>
        <Quote text={fish.description} />
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
