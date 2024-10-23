import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from '../../assets/logo2.png';
import { styles } from './style';
import Button from '../../components/Button';

export default function Account() {
  return <View style = {styles.container}>

<View style = {styles.containerLogo}>
<Image source={logo} style={styles.logo}/>
</View>


<View>

<View style={styles.containerInput}>
  <TextInput placeholder='Nome' style={styles.input}/>
</View>

<View style={styles.containerInput}>
  <TextInput placeholder='Email' style={styles.input}/>
</View>

<View style={styles.containerInput}>

  <TextInput placeholder='Senha' style={styles.input} secureTextEntry={true} />
  </View>
  <Button text="Acessar"/>

</View>

<View style={styles.footer}>
  <Text>Já tenho conta.
    <TouchableOpacity>
      <Text style={styles.footerLink}>Fazer login.</Text>
     </TouchableOpacity></Text>
</View>

  </View>

  
  
}
