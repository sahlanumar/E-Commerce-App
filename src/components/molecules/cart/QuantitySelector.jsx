import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const QuantitySelector = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDecrease} style={styles.button}>
        <Ionicons name="remove-circle-outline" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity onPress={onIncrease} style={styles.button}>
        <Ionicons name="add-circle-outline" size={24} color="#007bff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    minWidth: 40,
    textAlign: "center",
    color: "#333",
  },
});

export default QuantitySelector;
