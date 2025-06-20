import React from "react";
import { View, StyleSheet } from "react-native";
import { MenuItem } from "../../molecules";

const MenuList = ({ menus, onMenuItemPress }) => {
  return (
    <View style={styles.container}>
      {menus.map((menu, index) => (
        <View key={menu.id}>
          <MenuItem item={menu} onPress={() => onMenuItemPress(menu)} />
          {/* Tambahkan garis pemisah, kecuali untuk item terakhir */}
          {index < menus.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 16,
    borderRadius: 12,
    marginTop: 24,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    paddingHorizontal: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#f1f1f1",
    marginLeft: 50, // Agar garis mulai setelah ikon
  },
});

export default MenuList;
