import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SellerInfo = ({ seller }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Informasi Penjual</Text>
      <View style={styles.sellerContainer}>
        <Text style={styles.sellerName}>{seller.name}</Text>
        <Text style={styles.sellerLocation}>📍 {seller.location}</Text>
      </View>
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
  sellerContainer: {
    padding: 12,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dee2e6",
  },
  sellerName: { fontSize: 16, fontWeight: "600" },
  sellerLocation: { fontSize: 14, color: "#6c757d", marginTop: 4 },
});

export default SellerInfo;
