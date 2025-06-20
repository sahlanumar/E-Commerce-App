import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import QuantitySelector from "./cart/QuantitySelector";

const CartItemCard = ({ item, onIncrease, onDecrease }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.price}>{`Rp ${item.price.toLocaleString(
          "id-ID"
        )}`}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector
          quantity={item.quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#343a40",
  },
  price: {
    fontSize: 14,
    color: "#e63946",
    marginTop: 6,
  },
  quantityContainer: {
    justifyContent: "flex-end",
  },
});

export default CartItemCard;
