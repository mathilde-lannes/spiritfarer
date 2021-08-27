import React, { Component, useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import Fish from "../db/fish";
import { getFishImg } from "../utils/images/fishes";

const Searchbar = ({ onSearch }) => {
  const [items, setItems] = React.useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const options = {
        columns: "id",
      };

      const fishesResults = await Fish.query(options);
      const fishes = fishesResults.map((fish: Fish) => ({
        name: fish.id,
        id: fish.id,
        icon: getFishImg(fish.id),
      }));

      const fishCategory = {
        name: "Fishes",
        id: "fish",
        children: fishes,
      };
      setItems([fishCategory]);
    };
    getData();
  }, []);

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
