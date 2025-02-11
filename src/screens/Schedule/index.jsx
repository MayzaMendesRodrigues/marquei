import React, { useState } from 'react'
import { View, Text} from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { styles } from './style'
import { ptBR } from '../../constants/calendar'
import Button from '../../components/Button';

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br"

export default function Schedule() {



    const [selected, setSelect] = useState ("")
    const [selectHours, setSelectHours] = useState("")
  return <View style={styles.container}>
    <View>
<Calendar 
theme={styles.theme}
onDayPress={(day) => { setSelect(day.dateString)}}
markedDates={{
    [selected]: {selected: true}
}}
minDate={new Date().toDateString()}/>


<View style={styles.textHours}>
    <Text>Horario</Text>
</View>

{/*<View>
    <Picker 
    selectedValue={selectHours}
    onValueChange={(itemValue, itemIndex)=> (
        setSelectHours(itemValue)
    )}>
        <Picker.Item label="9:30" value="9:30"/>
        <Picker.Item label="9:30" value="9:30"/>
        <Picker.Item label="9:30" value="9:30"/>

    </Picker>
</View>*/}
</View>

<View style={styles.button}>
    <Button text="Confirmar reserva"/>
</View>
  </View>



  
}
