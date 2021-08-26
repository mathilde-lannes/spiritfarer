import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Quote = ({ text }: { text: string }) => {
  return (
    <Text style={styles.quote}>
      <MaterialCommunityIcons name="format-quote-open" size={15} />
      {text}
      <MaterialCommunityIcons name="format-quote-close" size={15} />
    </Text>
  );
};

const styles = StyleSheet.create({
  quote: {
    fontStyle: "italic",
    fontSize: 16,
    marginHorizontal: 15,
    marginVertical: 10,
  },
});

export default Quote;
