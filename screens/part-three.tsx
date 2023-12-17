import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
import Button from "../components/button";
import React from "react";

export default function PartThree() {
  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={{ flex: 1 }}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={[COLORS.secondary, COLORS.primary]}
      >
        <View>
          <Image
            source={require("../assets/images/hero1.jpg")}
            style={{
              position: "absolute",
              width: 100,
              height: 100,
              borderRadius: 20,
              top: 200,
              left: 40,
              transform: [{ rotate: "-15deg" }],
            }}
          />
          <Image
            source={require("../assets/images/hero2.jpg")}
            style={{
              position: "absolute",
              width: 150,
              height: 150,
              borderRadius: 10,
              top: 20,
              left: 20,
              transform: [{ translateX: 150 }, { rotate: "-25deg" }],
            }}
          />
          <Image
            source={require("../assets/images/hero1.jpg")}
            style={{
              position: "absolute",
              width: 150,
              height: 150,
              borderRadius: 10,
              top: 10,
              left: 100,
              transform: [
                { translateX: 120 },
                { translateY: 180 },
                { rotate: "25deg" },
              ],
            }}
          />
          <Image
            source={require("../assets/images/hero3.jpg")}
            style={{
              position: "absolute",
              width: 130,
              height: 130,
              borderRadius: 40,
              top: 10,
              left: 10,
              transform: [{ rotate: "-15deg" }],
            }}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.header}>Welcome !!</Text>
          <Text style={styles.subHead}>Let's get started</Text>
          <Text style={[styles.normal, { marginTop: 24 }]}>
            Connect with each other with chatting
          </Text>
          <Text style={[styles.normal, { marginBottom: 16 }]}>
            Calling, Enjoy Safe and private texting
          </Text>
          <Button theme="primary" label="Join now" onPress={() => {}} />
        </View>
      </LinearGradient>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    position: "absolute",
    top: 400,
    width: "100%",
    padding: 24,
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
    color: COLORS.white,
  },
  subHead: {
    fontSize: 40,
    color: "white",
  },
  normal: {
    fontSize: 16,
    color: "white",
  },
});
