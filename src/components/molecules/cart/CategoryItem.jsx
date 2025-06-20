import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CategoryItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.categoryItem}>
      <View style={styles.categoryIconContainer}>
        <Text style={styles.categoryIcon}>{item.icon}</Text>
      </View>
      <Text style={styles.categoryLabel}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    alignItems: "center",
    marginRight: 20,
    width: 70,
  },
  categoryIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#e0f7fa",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  categoryIcon: {
    fontSize: 28,
  },
  categoryLabel: {
    fontSize: 12,
    color: "#495057",
    textAlign: "center",
  },
});

export default CategoryItem;
