import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CheckoutFooter = ({ totalPrice, onCheckout }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.priceContainer}>
        <Text style={styles.totalLabel}>Total Harga</Text>
        <Text style={styles.totalPrice}>{`Rp ${totalPrice.toLocaleString(
          "id-ID"
        )}`}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={onCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#e9ecef",
    backgroundColor: "white",
    alignItems: "center",
  },
  priceContainer: {
    flex: 1,
  },
  totalLabel: {
    fontSize: 14,
    color: "#6c757d",
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e63946",
  },
  checkoutButton: {
    backgroundColor: "#28a745",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CheckoutFooter;
