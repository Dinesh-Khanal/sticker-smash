import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import ImageViewer from "../components/image-viewer";
import * as ImagePicker from "expo-image-picker";
import Button from "../components/button";
import IconButton from "../components/icon-button";
import CircleButton from "../components/circle-button";
import { useState } from "react";
import EmojiPicker from "../components/emoji-picker";
import EmojiList from "../components/emoji-list";
import EmojiSticker from "../components/emoji-sticker";
import { PartOneProp } from "../types";
const placeholderImageSource = require("../assets/images/background-image.png");

export default function PartOne({ navigation }: PartOneProp) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | null>(
    null
  );
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={imageSource} />
        {pickedEmoji !== null ? (
          <EmojiSticker imageSize={40} imageSource={pickedEmoji} />
        ) : null}
      </View>
      <View style={styles.footerContainer}>
        <Button
          label="Choose a photo"
          theme="primary"
          onPress={pickImageAsync}
        />
        {showAppOptions ? (
          <View
            style={{
              flexDirection: "row",
              gap: 8,
              justifyContent: "center",
              marginTop: 8,
            }}
          >
            <IconButton
              icon_name="save"
              label="Save"
              onPress={onSaveImageAsync}
            />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon_name="refresh" label="Reset" onPress={onReset} />
          </View>
        ) : (
          <Button
            label="Use the photo"
            onPress={() => setShowAppOptions(true)}
          />
        )}
        <Button
          label="Home Screen"
          theme="primary"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <EmojiPicker
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <EmojiList
          onSelect={setPickedEmoji}
          onCloseModal={() => setModalVisible(false)}
        />
      </EmojiPicker>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 2,
    padding: 8,
    justifyContent: "center",
  },
});
