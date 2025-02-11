import { View, Text, Image, FlatList} from 'react-native'
import { styles } from './style';
import CardService from '../../components/CardService';
import NavBar from '../../components/NavBar';
import { useState } from 'react';


export default function Home() {
  const [activeButton, setActiveButton] = useState("Upcoming")

  return <View style={styles.container}>
    <Text style={styles.text}>Select the service to schedule an appointment</Text>
    {/**<View style={styles.containerBar}>
    <NavBar
     label="Book By Tratament"
     isActive={activeButton === "Book By Tratament"}
     onPress={() => setActiveButton("Book By Tratament")}/>

<NavBar
     label="Upcoming"
     isActive={activeButton === "Upcoming"}
     onPress={() => setActiveButton("Upcoming")}/>
  </View> */} 
  <CardService/> 

  </View>

 
  
}
