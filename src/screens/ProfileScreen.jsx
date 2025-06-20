import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Alert,
} from "react-native";
import { userProfile, profileMenus } from "../constants/data";
import { ProfileHeader } from "../components/molecules";
import { MenuList } from "../components/organisms";

const ProfileScreen = ({ navigation }) => {
  const handleMenuItemPress = (menuItem) => {
    if (menuItem.action === "logout") {
      Alert.alert("Logout", "Apakah Anda yakin ingin keluar?", [
        { text: "Batal", style: "cancel" },
        {
          text: "Ya, Keluar",
          onPress: () => console.log("User logged out!"),
          style: "destructive",
        },
      ]);
    } else {
      Alert.alert("Navigasi", `Membuka halaman ${menuItem.title}...`);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profil Saya</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <ProfileHeader user={userProfile} />
        <MenuList menus={profileMenus} onMenuItemPress={handleMenuItemPress} />
      </ScrollView>
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
  container: {
    paddingBottom: 20,
  },
});

export default ProfileScreen;
