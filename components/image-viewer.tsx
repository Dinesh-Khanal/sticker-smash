import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import React from "react";

type PlaceImage = {
  imageSource: ImageSourcePropType;
};
export default function ImageViewer({ imageSource }: PlaceImage) {
  return <Image source={imageSource} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
