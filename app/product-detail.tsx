import { View, Text, StyleSheet, Image, Button } from "react-native";
import React from "react";
import { ProductDetailProp } from "../types";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/cart-slice";

export default function ProductDetail({
  navigation,
  route,
}: ProductDetailProp) {
  const { product } = route.params;
  const dispatch = useAppDispatch();
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
        <View style={styles.btnContainer}>
          <Button
            title="Add item"
            onPress={() => dispatch(addToCart(product.id))}
          />
          <Button
            title="Go to cart"
            onPress={() => navigation.navigate("Cart")}
          />
        </View>
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
  btnContainer: {
    flexDirection: "row",
    gap: 12,
    padding: 12,
    justifyContent: "space-between",
  },
});
