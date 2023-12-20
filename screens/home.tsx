import { View, StyleSheet, Text, FlatList } from "react-native";
import Button from "../components/button";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { HomeScreenProp } from "../types";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export default function Home({ navigation }: HomeScreenProp) {
  const parts = [
    { screen: "PartOne", label: "Part One" },
    { screen: "PartTwo", label: "Part Two" },
  ];

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Home Screen</Text>
          <Text style={{ fontSize: 16 }}>
            In order to navigate to certain part please press the corresponding
            button below.
          </Text>
        </View>
        <FlatList
          data={parts}
          renderItem={({ item, index }) => (
            <Button
              label={item.label}
              theme="primary"
              //@ts-ignore
              onPress={() => navigation.navigate(item.screen)}
              key={index}
            />
          )}
        />
        <Button label="Sign out" theme="primary" onPress={handleLogout} />
      </View>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    gap: 6,
    padding: 16,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "500",
    margin: 6,
    color: "#0000ff",
  },
  textContainer: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
  },
});
