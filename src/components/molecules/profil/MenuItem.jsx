import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const MenuItem = ({ item, onPress }) => {
  const isLogout = item.action === "logout";
  const textColor = isLogout ? "#e63946" : "#343a40";
  const iconColor = isLogout ? "#e63946" : "#888";

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons
        name={item.icon}
        size={24}
        color={iconColor}
        style={styles.icon}
      />
      <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
      {!isLogout && (
        <Ionicons name="chevron-forward-outline" size={22} color="#ccc" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 16,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default MenuItem;
