import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductDescription = ({ description }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Deskripsi Produk</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#343a40",
  },
  description: { fontSize: 14, lineHeight: 22, color: "#495057" },
});

export default ProductDescription;
