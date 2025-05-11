import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useAuth } from "../../contexts/auth";

// import { style } from "./style.js";

export default function Home() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <View>
      <Image
        source={require("../../../assets/logo.png")}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      />
      <Text>Home</Text>

      <TouchableOpacity
        style={{ marginTop: 20, padding: 10, backgroundColor: "red", borderRadius: 5 }}
        onPress={handleLogout}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}