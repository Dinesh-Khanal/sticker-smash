import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageViewer from "./components/image-viewer";
import * as ImagePicker from "expo-image-picker";
import Button from "./components/button";
import IconButton from "./components/icon-button";
import CircleButton from "./components/circle-button";
import { useState } from "react";

const placeholderImageSource = require("./assets/images/background-image.png");

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
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
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={imageSource} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          label="Choose a photo"
          theme="primary"
          onPress={pickImageAsync}
        />
        <Button
          label="Use the photo"
          onPress={() => setShowAppOptions(!showAppOptions)}
        />
        {showAppOptions && (
          <View
            style={{ flexDirection: "row", gap: 8, justifyContent: "center" }}
          >
            <IconButton
              icon_name="save"
              label="Save"
              onPress={onSaveImageAsync}
            />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon_name="refresh" label="Save" onPress={onReset} />
          </View>
        )}
      </View>
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
  },
});
