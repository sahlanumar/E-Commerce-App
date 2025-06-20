import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { ProductCard } from "../../molecules";

const ProductGrid = ({ products, navigation }) => {
  const handleProductPress = (item) => {
    navigation.navigate("ProductDetail", { productId: item.id });
  };
  return (
    <View>
      <Text style={styles.sectionTitle}>Paling Laris</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard item={item} onPress={() => handleProductPress(item)} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.productGridRow}
        scrollEnabled={false}
      />
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
  productGridRow: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
});

export default ProductGrid;
