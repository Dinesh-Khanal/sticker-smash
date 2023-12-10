import {
  View,
  FlatList,
  Pressable,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";
import { useState } from "react";

type ItemProps = {
  onSelect: (item: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: ItemProps) {
  const [emojis] = useState([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
    require("../assets/images/emoji6.png"),
  ]);

  return (
    <View>
      <FlatList
        horizontal
        data={emojis}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}
            style={{ padding: 8 }}
          >
            <Image source={item} style={styles.item} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 48,
    height: 48,
  },
});
