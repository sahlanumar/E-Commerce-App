import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductInfo = ({ product }) => {
  return (
    <View>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>
        {`Rp ${product.price.toLocaleString("id-ID")}`}
      </Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>⭐ {product.rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productName: { fontSize: 24, fontWeight: "bold", color: "#212529" },
  productPrice: {
    fontSize: 22,
    fontWeight: "700",
    color: "#e63946",
    marginTop: 8,
  },
  ratingContainer: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  ratingText: { fontSize: 16, color: "#495057" },
});

export default ProductInfo;
