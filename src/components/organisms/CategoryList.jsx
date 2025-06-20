import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { CategoryItem } from "../molecules";

const CategoryList = ({ categories }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Kategori</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      >
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#343a40",
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 12,
  },
  categoryList: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default CategoryList;
