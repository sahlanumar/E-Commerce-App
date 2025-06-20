import React from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";

const { width } = Dimensions.get("window");

const PromoBanner = ({ banners }) => {
  const renderBannerItem = ({ item }) => (
    <TouchableOpacity style={styles.bannerContainer}>
      <Image source={{ uri: item.image }} style={styles.bannerImage} />
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles.sectionTitle}>Promo Spesial</Text>
      <FlatList
        data={banners}
        renderItem={renderBannerItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.bannerList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#343a40",
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 12,
  },
  bannerList: {
    paddingHorizontal: 16,
  },
  bannerContainer: {
    width: width * 0.8,
    height: width * 0.4,
    marginRight: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
});

export default PromoBanner;
