import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { CartItemCard } from "../../molecules";

const CartList = ({ items, onIncrease, onDecrease }) => {
  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Keranjang Anda kosong</Text>
        <Text style={styles.emptySubText}>Ayo mulai belanja!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CartItemCard
          item={item}
          onIncrease={() => onIncrease(item.id)}
          onDecrease={() => onDecrease(item.id)}
        />
      )}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6c757d",
  },
  emptySubText: {
    fontSize: 16,
    color: "#adb5bd",
    marginTop: 8,
  },
});

export default CartList;
