import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import React from "react";

interface StickerProps {
  imageSource: ImageSourcePropType;
  imageSize: number;
}
export default function EmojiSticker({ imageSource, imageSize }: StickerProps) {
  return (
    <View style={{ top: -420 }}>
      <Image
        source={imageSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
