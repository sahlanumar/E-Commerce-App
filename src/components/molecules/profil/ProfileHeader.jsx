import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfileHeader = ({ user }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 12,
    marginTop: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#343a40",
  },
  email: {
    fontSize: 14,
    color: "#6c757d",
    marginTop: 4,
  },
});

export default ProfileHeader;
