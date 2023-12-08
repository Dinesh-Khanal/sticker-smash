import { View, StyleSheet, Pressable, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function IconButton({
  icon_name,
  label,
  onPress,
}: {
  icon_name: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
}) {
  return (
    <View style={{ borderColor: "white", borderWidth: 1, borderRadius: 8 }}>
      <Pressable>
        <MaterialIcons
          name={icon_name}
          size={30}
          color="#25292e"
          style={styles.buttonIcon}
        />
        <Text style={styles.btntext}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonIcon: {
    color: "white",
    padding: 12,
  },
  btntext: {
    color: "white",
    paddingHorizontal: 12,
    fontSize: 18,
  },
});
