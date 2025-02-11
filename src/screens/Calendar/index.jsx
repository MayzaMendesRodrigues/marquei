import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { View, Text, FlatList, Alert } from "react-native";
import Appointments from "../../components/Appointment";
import api from "../../constants/api";
import FadingLoader from "../../components/FadingLoader/Index";
import Button from "../../components/Button";

export default function Calendar() {
  const [appointments, setAppointments] = useState([]); //useState ([])

  async function LoadAppointments() {
    try {
      const response = await api.get("/appointments");

      if (response.data) {
        setAppointments(response.data);
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde ");
      }
    }
  }

  async function DeleteAppointment(id_appointment) {
    try {
      const response = await api.delete("/appointments" + id_appointment);

      if (response.data) {
        setAppointments(response.data?.id_appointment);
        LoadAppointments();
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
return      }
    }
  }

  useEffect(() => {
    LoadAppointments();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={appointments}
        keyExtractor={(appoint) => appoint.id_appointment}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Appointments
              id_appointment={item.id_appointment}
              service={item.service}
              pro={item.pro}
              specialty={item.specialty}
              onPress={DeleteAppointment}
              bookingDate={item.booking_date}
              bookingHour={item.booking_hour}
            />
          );
        }}
        ListEmptyComponent={<>
        <View style={styles.container}>
       <FadingLoader/>

        <View style={styles.footer}>
        <Text style={styles.textPrincipal}>You haven’t booked yet</Text>
        <Text style={styles.text}>You don’t have any upcoming bookings to display</Text>
      <Button text="Book Now" />
        </View>
        </View>
      </>}
      />
    </View>
  );
}


