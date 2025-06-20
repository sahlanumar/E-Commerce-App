import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { products } from "../constants/data";
import { ProductDetailContent, DetailFooter } from "../components/organisms";

const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const product = products.find((p) => p.id === productId);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: product ? product.name : "Detail Produk",
    });
  }, [navigation, product]);

  const handleAddToCart = () => {
    alert(`"${product.name}" ditambahkan ke keranjang!`);
  };

  if (!product) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.notFoundContainer}>
          <Text>Produk tidak ditemukan!</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ProductDetailContent product={product} />
      <DetailFooter onAddToCart={handleAddToCart} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "white" },
  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductDetailScreen;
