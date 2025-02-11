import { View, Text, Image, FlatList} from 'react-native'
import bookings from '../../constants/serviceBookings'
import { styles } from './style'



export default function ServicesBookings() {
  return (
    <View style={styles.cardContainer}>

    <FlatList
    data={bookings}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => (
      
      <View style={styles.container}>
    <Text style={styles.text}>{item.profissional} </Text>
      </View>
    
    )}
    />
        </View>
  )
  
  
}
