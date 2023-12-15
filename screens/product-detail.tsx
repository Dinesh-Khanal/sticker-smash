import { View, Text, StyleSheet, Image, Button } from "react-native";
import React from "react";
import { ProductDetailProp } from "../types";

export default function ProductDetail({
  navigation,
  route,
}: ProductDetailProp) {
  const { product } = route.params;
  return (
    <View style={styles.detailContainer}>
      <View style={styles.image}>
        <Image
          source={{ uri: product.image }}
          style={{ width: 350, height: 450 }}
        />
      </View>
      <View style={styles.detail}>
        <Text style={styles.title}>{`Title: ${product.title}`}</Text>
        <Text style={styles.title}>{`Category: ${product.category}`}</Text>
        <Text>{`Description: ${product.description}`}</Text>
        <Text style={styles.title}>{`Price: ${product.price}`}</Text>
        <Button title="Add to cart" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    padding: 12,
  },
  image: {
    flex: 5,
    alignItems: "center",
  },
  detail: {
    flex: 3,
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
});
