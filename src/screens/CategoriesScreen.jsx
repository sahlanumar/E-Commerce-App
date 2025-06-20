import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  StatusBar,
} from "react-native";
import { categories } from "../constants/data";
import { CategoryGridItem } from "../components/molecules";

const CategoriesScreen = ({ navigation }) => {
  const handleCategoryPress = (category) => {
    navigation.navigate("ProductList", {
      categoryId: category.id,
      categoryName: category.name,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Semua Kategori</Text>
      </View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <CategoryGridItem
            item={item}
            onPress={() => handleCategoryPress(item)}
          />
        )}
        contentContainerStyle={styles.gridContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  gridContainer: {
    padding: 8,
  },
});

export default CategoriesScreen;
