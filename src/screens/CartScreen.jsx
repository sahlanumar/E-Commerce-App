import React, { useState, useEffect, useMemo } from "react";
import { View, Text, StyleSheet, SafeAreaView, Alert } from "react-native";
// Pastikan path import sudah benar
import { products, sampleCart } from "../constants/data";
import { CartList, CheckoutFooter } from "../components/organisms";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  // Inisialisasi data keranjang dari data dummy
  useEffect(() => {
    // --- BAGIAN YANG DIPERBAIKI ADA DI SINI ---
    const initialItems = sampleCart
      .map((cartItem) => {
        // 1. Cari detail produk
        const productDetails = products.find(
          (p) => p.id === cartItem.productId
        );

        // 2. Jika produk tidak ditemukan, kembalikan null
        if (!productDetails) {
          console.warn(
            `Produk dengan ID "${cartItem.productId}" tidak ditemukan di daftar produk.`
          );
          return null;
        }

        // 3. Jika ditemukan, gabungkan data
        return {
          ...productDetails,
          quantity: cartItem.quantity,
        };
      })
      .filter((item) => item !== null); // 4. Buang semua hasil null dari array

    setCartItems(initialItems);
  }, []);

  const handleIncrease = (productId) => {
    const newCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(newCartItems);
  };

  const handleDecrease = (productId) => {
    const newCartItems = cartItems
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCartItems(newCartItems);
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      Alert.alert(
        "Checkout Berhasil",
        `Total belanja Anda adalah Rp ${totalPrice.toLocaleString("id-ID")}`
      );
    } else {
      Alert.alert(
        "Keranjang Kosong",
        "Silakan tambahkan produk ke keranjang terlebih dahulu."
      );
    }
  };

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Keranjang Saya</Text>
      </View>
      <CartList
        items={cartItems}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <CheckoutFooter totalPrice={totalPrice} onCheckout={handleCheckout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CartScreen;
