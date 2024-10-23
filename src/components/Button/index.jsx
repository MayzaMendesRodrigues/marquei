import { Alert, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function Button(props) {

    function TesteClient () {
        Alert.alert("Clicou no nosso botao")
    }
  return <>
   <TouchableOpacity onPress={TesteClient} style={styles.btn}>
     <Text style={styles.text}>
        {props.text}
    </Text>
   </TouchableOpacity>
  </>
}
