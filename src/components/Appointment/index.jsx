import React from 'react'
import { View, Text} from 'react-native'
import { styles } from './style';
import Button from '../../components/Button';
import { COLORS } from '../../constants/theme';
import { appointments } from '../../constants/data.js';

export default function Appointments(props) {
// 2024-11-15T08:30:00
  const dt = new Date(props.bookingDate + "T" + props.bookingHours)
  return <View style={styles.appointments}>
    <Text style={styles.name}>
        {props.service} - {props.doctor}
    </Text>
    <Text style={styles.specialty}>
        {props.specialty}
    </Text>

    <View style={styles.container}>

        <View style={styles.containerBooking}>
            <View style={styles.booking}>
            <Text style={styles.bookingDate}>{dt.toLocaleDateString}</Text>
            </View>

            <View style={styles.booking}>
            <Text style={styles.bookingHours}>{dt.toLocaleTimeString}</Text>
            </View>     
        </View>


        <View style={styles.bookingButton}>
        <Button text="Cancelar Reserva" theme="danger" 
        onPress={()=> props.onPress(props.id_appointment)}/>


        </View>
    </View>
  </View>
  
}
