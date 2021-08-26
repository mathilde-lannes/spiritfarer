import React, { Component, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import SectionedMultiSelect from "react-native-sectioned-multi-select";

const items = [
  // this is the parent or 'item'
  {
    name: "Fruits",
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: "Apple",
        id: 10,
      },
      {
        name: "Strawberry",
        id: 17,
      },
      {
        name: "Pineapple",
        id: 13,
      },
      {
        name: "Banana",
        id: 14,
      },
      {
        name: "Watermelon",
        id: 15,
      },
      {
        name: "Kiwi fruit",
        id: 16,
      },
    ],
  },
  {
    name: "Fishes",
    id: 1,
    // these are the children or 'sub items'
    children: [
      {
        name: "Salmon",
        id: 17,
        icon: require("../assets/images/Sockeye_Salmon.webp"),
      },
    ],
  },
];
const Searchbar = ({ onSearch }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <View style={{ marginHorizontal: 20 }}>
      {/*
      // @ts-ignore */}
      <SectionedMultiSelect
        IconRenderer={MaterialIcons}
        items={items}
        uniqueKey="id"
        iconKey="icon"
        subKey="children"
        selectText="Tap for quick search"
        searchPlaceholderText={"Type an item name"}
        single={true}
        showChips={false}
        hideConfirm={true}
        showDropDowns={true}
        expandDropDowns={true}
        readOnlyHeadings={true}
        onSelectedItemsChange={onSearch}
        selectedItems={selectedItems}
        styles={styles}
        colors={{ primary: "#ececec" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selectToggle: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    borderRadius: 5,
  },
  confirmText: {
    color: "#2e2e2e",
  },
  searchBar: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  itemIconStyle: {
    width: 50,
    height: 50,
  },
});

export default Searchbar;
