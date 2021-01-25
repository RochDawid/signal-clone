import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { Button, Input, Image, Header } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <Header
        placement="center"
        centerComponent={{ text: "Register", style: { color: "#fff" } }}
      />
      <Image
        source={{
          uri:
            "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Input
        placeholder="Name"
        type="text"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        type="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button containerStyle={styles.button} title="Register" />
      <Button
        onPress={() => navigation.navigate("Login")}
        containerStyle={styles.button}
        title="Login"
        type="outline"
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    width: 150,
    marginTop: 10,
  },
});
