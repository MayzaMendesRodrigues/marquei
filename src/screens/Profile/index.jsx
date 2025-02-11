import React from 'react'
import { View, Text} from 'react-native'
import { styles } from './style'
import { TextInput } from 'react-native-paper'
export default function Profile() {
  return ( 

   <View style={styles.container}>
    
 
   <View>
   <Text style={styles.label}>Nome:</Text>
   <TextInput style={styles.input}editable={true} />
   </View>
         
      
    <View >
    <Text style={styles.label}>Email:</Text>
    <TextInput style={styles.input}  editable={true}/>

    </View>


   
    
  
  </View>
  
)}
