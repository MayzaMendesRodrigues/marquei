import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

export default function NavBar({label, isActive, onPress}) {
  return (
    <TouchableOpacity 
    style={[styles.button, isActive ? styles.active && styles.activeButton : styles.inactive]}
    onPress={onPress}>
        <Text>{label} </Text>
    </TouchableOpacity>
   
  )
}
