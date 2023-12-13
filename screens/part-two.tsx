import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { products } from "../products";

type ProductProp = {
  id: number;
  image: string;
  title: string;
};
const ItemList = ({
  product,
  onPress,
}: {
  product: ProductProp;
  onPress: () => void;
}) => {
  return (
    <Pressable style={styles.product} onPress={onPress}>
      <Image
        source={{ uri: product.image }}
        resizeMode="contain"
        style={{ width: 150, height: 150 }}
      />
      <Text style={styles.title}>{product.title}</Text>
    </Pressable>
  );
};

export default function PartTwo() {
  const [Products] = useState(products);
  return (
    <SafeAreaView style={styles.productContainer}>
      <Text style={styles.heading}>Product List</Text>
      <FlatList
        data={Products}
        renderItem={({ item }) => (
          <ItemList product={item} onPress={() => {}} />
        )}
        horizontal
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
    marginRight: 12,
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
