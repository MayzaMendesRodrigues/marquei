import {ScrollView, View, Text, Image, FlatList, TouchableOpacity} from "react-native"
import { styles } from "./style"
import image from "../../constants/services"
export default function CardService() {
  return (
    
    <View style={styles.cardContainer}>
<ScrollView
showsHorizontalScrollIndicator={false}
showsVerticalScrollIndicator={false}>


<FlatList
data={image}
keyExtractor={(item) => item.id.toString()}
renderItem={({item}) => (
  
  <TouchableOpacity style={styles.container}>
<Image style={styles.cardImage}source={item.source}/>
<Text style={styles.text}>{item.name} </Text>
  </TouchableOpacity>

)}
/>
</ScrollView>
    </View>
  )
}
