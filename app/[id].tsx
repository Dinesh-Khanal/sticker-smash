import { View, Text, StyleSheet, Image, Button } from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToCart } from "../redux/cart-slice";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const { pList, isLoading, errMessage } = useAppSelector(
    (state) => state.products
  );
  const router = useRouter();
  const product = pList.find((item) => item.id.toString() === id);
  if (isLoading) return <Text>Loading...</Text>;
  if (!product) {
    return null;
  }
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
          <Button title="Go to cart" onPress={() => router.push("/cart")} />
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
