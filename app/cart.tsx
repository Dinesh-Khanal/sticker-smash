import { View, Text, StyleSheet, Button } from "react-native";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { removeFromCart, addToCart } from "../redux/cart-slice";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cart() {
  const { cartItems } = useAppSelector((state) => state.carts);
  const { pList } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {cartItems.map((item) => {
        const product = pList.find((p) => p.id === item.productId);
        return (
          <View key={item.productId}>
            <Text style={{ alignSelf: "center", paddingTop: 12, fontSize: 16 }}>
              Product: {product?.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 6,
                justifyContent: "space-between",
                marginHorizontal: 24,
                marginBottom: 12,
              }}
            >
              <Text>Price: {product?.price}</Text>
              <Text>Quantity: {item.qty}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 6,
                justifyContent: "space-around",
                paddingBottom: 12,
                borderBottomWidth: 1,
              }}
            >
              <Button
                title="Add more"
                onPress={() => dispatch(addToCart(item.productId))}
              />
              <Button
                title="Remove"
                onPress={() => dispatch(removeFromCart(item.productId))}
              />
            </View>
          </View>
        );
      })}
    </SafeAreaView>
  );
}
