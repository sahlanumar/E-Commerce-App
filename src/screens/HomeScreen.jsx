import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { categories, products, banners } from "../constants/data";
import {
  HomeHeader,
  PromoBanner,
  CategoryList,
  ProductGrid,
} from "../components/organisms";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HomeHeader />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <PromoBanner banners={banners} />
        <CategoryList categories={categories} />
        <ProductGrid products={products} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    paddingBottom: 20,
  },
});

export default HomeScreen;
