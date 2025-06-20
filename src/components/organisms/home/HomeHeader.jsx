import React from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar } from "../../molecules";

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <SearchBar placeholder="Cari produk di TokoKita..." />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
  },
});

export default HomeHeader;
