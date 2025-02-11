import { Image, Text, TouchableOpacity, View } from 'react-native'
import {styles} from './style'
import { COLORS } from '../../constants/theme';

export default function Profissionals(props) {
  return <>


   <TouchableOpacity style={styles.profissionals} onPress={()=> props.onPress( props.id_pro, props.name, props.specialty, props.icon)}>


   <View>
         <Text style={styles.textDoctorProfissionals}>{props.name}</Text>
          <Text style={styles.textSpecialtyProfissionals}>{props.specialty}</Text>
   </View>
   </TouchableOpacity>

  </>
  
  
}
