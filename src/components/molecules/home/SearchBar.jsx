import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const SearchBar = ({ placeholder }) => {
  return (
    <View style={styles.searchBarContainer}>
      <Text style={styles.searchIcon}>🔍</Text>
      <TextInput
        placeholder={placeholder || "Cari sesuatu..."}
        style={styles.searchInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e9ecef",
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 44,
    fontSize: 16,
  },
});

export default SearchBar;
