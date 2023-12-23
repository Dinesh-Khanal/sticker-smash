import { View, StyleSheet, Text, FlatList } from "react-native";
import Button from "../components/button";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { HomeScreenProp } from "../types";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link } from "expo-router";

export default function Home() {
  const parts = [
    { screen: "part-one", label: "Part One" },
    { screen: "part-two", label: "Part Two" },
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
            <View style={styles.btn} key={index}>
              <Link href={`/${item.screen}`}>
                <Text style={{ fontSize: 20, color: "#fff" }}>
                  {item.label}
                </Text>
              </Link>
            </View>
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
  btn: {
    flexDirection: "row",
    backgroundColor: "#88f",
    borderRadius: 6,
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
});
