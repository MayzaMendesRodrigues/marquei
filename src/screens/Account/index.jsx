import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import Button from "../../components/Button";
import { useState } from "react";
import api from "../../constants/api";
import { Alert } from "react-native";
import Input from "../../components/TextInput";

export default function Account({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function CreateAccount() {
    try {
      const response = await api.post("users/register", {
        name,
        email,
        password,
      });
      if (response.data) {
        console.log("Conta criada com sucesso:", response.data);
        Alert.alert("Conta criada com sucesso");
      }
    } catch (error) {
      console.log("Error", error);
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("Ocorreu um erro. tente novamente mais tarde");
      }
    }
  }

  return (
      <View style={styles.container}>

        < View style={styles.container__title}>
        <Text style={styles.title}>Get Started</Text>
        </View>

      <View style={styles.container__input}>
      <Input 
        keyboardType="name"
         placeholder="Full Name"
         onChangeText={(texto) => setName(texto)}
         />

         <Input 
         placeholder="Email"
         keyboardType="email-address"
         onChangeText={(texto) => setEmail(texto)}
         />

         <Input 
         placeholder="Password"
         secureTextEntry
         onChangeText={(texto) =>  setPassword(texto)}
         />
      </View>
      

        
     

        <View style={styles.buttonSignUp}>
          <Button text="Sign up" onPress={CreateAccount} />
        </View>

        <View style={styles.socialLoginContainer}>
          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text style={styles.socialLoginText}>Sign up with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialIcons}>
            <TouchableOpacity>
              <Text> icon </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text> icon </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text> icon </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.signupLinkContainer}>
          <Text style={styles.signupText}>
            Already have an account?{" "}
            <Text style={styles.signupLink} onPress={() => navigation.goBack()}>
              {" "}
              Sign in
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    
  );
}
