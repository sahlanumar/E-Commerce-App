import React, { useMemo } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { products } from "../constants/data";
import { ProductGrid } from "../components/organisms";

const ProductListScreen = ({ route, navigation }) => {
  const { categoryId, categoryName } = route.params;

  // Mengatur judul header navigasi secara dinamis
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryName,
    });
  }, [navigation, categoryName]);

  // Memfilter produk berdasarkan categoryId
  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.categoryId === categoryId);
  }, [categoryId]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        {/* Menggunakan kembali organisme ProductGrid! */}
        <ProductGrid products={filteredProducts} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
});

export default ProductListScreen;
