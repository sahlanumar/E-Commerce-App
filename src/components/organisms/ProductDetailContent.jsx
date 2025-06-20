import React from "react";
import { ScrollView, View, Image, StyleSheet } from "react-native";
import { ProductInfo, ProductDescription, SellerInfo } from "../molecules";

const Divider = () => <View style={styles.divider} />;

const ProductDetailContent = ({ product }) => {
  return (
    <ScrollView>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.contentContainer}>
        <ProductInfo product={product} />
        <Divider />
        <ProductDescription description={product.description} />
        <Divider />
        <SellerInfo seller={product.seller} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productImage: { width: "100%", aspectRatio: 1 },
  contentContainer: { padding: 16 },
  divider: { height: 1, backgroundColor: "#e9ecef", marginVertical: 20 },
});

export default ProductDetailContent;
