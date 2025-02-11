import { TextInput } from "react-native-paper"
import { styles } from "./style"
import { View } from "react-native"

function Input({placeholder, keyboardType="default", secureTextEntry=false}) {
  return (
    
        <>
        <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        />

        <View style={styles.line}/>
        </>
    
  )
}

export default Input