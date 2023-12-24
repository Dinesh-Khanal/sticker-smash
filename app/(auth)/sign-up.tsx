import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function SignUp() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err: any) {
        console.log("Error: ", err.message);
      }
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Create Account</Text>
        <Text>Connect with your friend today!</Text>
        <Text style={styles.subHeading}>Email address</Text>
        <TextInput
          placeholder="Enter your email address"
          placeholderTextColor={COLORS.black}
          keyboardType="email-address"
          style={styles.input}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Text style={styles.subHeading}>Mobile Number</Text>
        <View style={styles.mobile}>
          <Text style={{ marginLeft: 12 }}>+977</Text>
          <TextInput
            placeholder="Enter your phone number"
            placeholderTextColor={COLORS.black}
            keyboardType="numeric"
            style={{ marginLeft: 12, padding: 12, borderLeftWidth: 1 }}
          />
        </View>
        <Text style={styles.subHeading}>Password</Text>
        <View style={styles.passwd}>
          <TextInput
            secureTextEntry={isPasswordShown}
            placeholderTextColor={COLORS.black}
            placeholder="Enter your password"
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordShown(!isPasswordShown)}
            style={{
              position: "absolute",
              right: 12,
            }}
          >
            {isPasswordShown == true ? (
              <Ionicons name="eye-off" size={24} color={COLORS.black} />
            ) : (
              <Ionicons name="eye" size={24} color={COLORS.black} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <View style={styles.signUp}>
          <View style={{ backgroundColor: "black", height: 1, width: "35%" }} />
          <Text>Or Sign up with</Text>
          <View style={{ backgroundColor: "black", height: 1, width: "35%" }} />
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <View style={styles.imgBtn}>
            <Image
              source={require("../../assets/images/facebook.png")}
              style={{ height: 40, width: 40 }}
            />
            <Text style={{ fontWeight: "500", fontSize: 16 }}>Facebook</Text>
          </View>
          <View style={styles.imgBtn}>
            <Image
              source={require("../../assets/images/google.png")}
              style={{ height: 40, width: 40 }}
            />
            <Text style={{ fontWeight: "500", fontSize: 16 }}>Google</Text>
          </View>
        </View>
      </View>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
  },
  subHeading: {
    marginTop: 18,
    marginBottom: 8,
    fontWeight: "500",
  },
  mobile: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
  },
  signUp: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    marginVertical: 16,
  },
  btn: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 8,
    marginVertical: 16,
  },
  passwd: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
  },
  imgBtn: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 8,
    flexBasis: "48%",
    flexDirection: "row",
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
