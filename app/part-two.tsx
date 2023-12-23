import { Text, StyleSheet, Image, FlatList, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { fetchProduct } from "../redux/product-slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link } from "expo-router";

export default function PartTwo() {
  const { pList, isLoading, errMessage } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  if (isLoading) return <Text>Loading...</Text>;
  return (
    <SafeAreaView style={styles.productContainer}>
      <Text style={styles.heading}>Product List</Text>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={pList}
        numColumns={2}
        renderItem={({ item }) => (
          <Link
            href={{ pathname: "/product-detail", params: { product: item } }}
            asChild
          >
            <Pressable style={styles.product}>
              <Image
                source={{ uri: item.image }}
                resizeMode="contain"
                style={{ width: 150, height: 150 }}
              />
              <Text style={styles.title}>{item.title}</Text>
            </Pressable>
          </Link>
        )}
      />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    padding: 12,
  },
  product: {
    width: 180,
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "500",
    paddingVertical: 12,
    textAlign: "center",
  },
});
