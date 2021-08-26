import React from "react";
import Colors from "../constants/Colors";
import { Chip } from "react-native-paper";
import { StyleSheet } from "react-native";
import useColorScheme from "../hooks/useColorScheme";

const ItemChip = ({
  color,
  text,
}: {
  text: string;
  color:
    | "primary"
    | "danger"
    | "accent"
    | "subtle"
    | "success"
    | "warning"
    | "secondary";
}) => {
  const colorScheme = useColorScheme();
  return (
    <Chip
      textStyle={{
        fontSize: 13,
        fontWeight: "bold",
        minHeight: 15,
        lineHeight: 20,
      }}
      style={{
        ...styles.chip,
        backgroundColor: Colors[colorScheme][color],
      }}
    >
      {text}
    </Chip>
  );
};

const styles = StyleSheet.create({
  chip: {
    height: 30,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 5,
  },
});

export default ItemChip;
