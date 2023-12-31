import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const router = useRouter();
  const { user } = useAuth();
  const handleSubmit = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err: any) {
        console.log("Error: ", err.message);
      }
    }
  };
  if (user) {
    router.push("/part-two");
  }
  return (
    <View style={{ padding: 22 }}>
      <Text style={styles.subHeading}>Email address</Text>
      <TextInput
        placeholder="Enter your email address"
        placeholderTextColor={COLORS.black}
        keyboardType="email-address"
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
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
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 18,
  },
  subHeading: {
    marginTop: 18,
    marginBottom: 8,
    fontWeight: "500",
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
    marginBottom: 22,
  },
});
