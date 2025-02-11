import React, { useState } from "react";
import { Text, View,TouchableOpacity } from "react-native";
import { styles } from "./style";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import Input from "../../components/TextInput";

export default function Login() {
  return (
    <View style={styles.container}>

      <View style={styles.container__logo}>
        <Logo width={200} height={100} />
      </View>

      <View style={styles.container__input}>
       <Input placeholder="Email" keyboardType="email-address"/>
       <Input placeholder="Password" secureTextEntry/>
      </View>


  

      <Button text="Sign in" />

      <View style={styles.footer__login}>
        <Text>I don't have an account. </Text>
        <TouchableOpacity>
          <Text style={styles.sign__up__login}>Create account now</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
