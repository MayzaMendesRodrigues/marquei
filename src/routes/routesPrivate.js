import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Main from "../screens/Main/index.jsx"
import Services from "../screens/Services/index.jsx"
import Schedule from "../screens/Schedule/index.jsx"
import { COLORS } from "../constants/theme.js"

const Stack = createNativeStackNavigator()
export default function RoutesPrivate() {
  return <Stack.Navigator>
    <Stack.Screen name="main" component={Main} options={{headerShown: false}}/>
    <Stack.Screen name="services" component={Services} 
    options={{
      headerTitle: "Services",
      headerTitleAlign: "center",
      headerStyle:{
        backgroundColor: COLORS.purple
      },
      headerShadowVisible: false,
      headerTintColor:COLORS.white

    }}/>
    <Stack.Screen name="schedule" component={Schedule} 
     options={{
      headerTitle: "Fazer uma reserva",
      headerTitleAlign: "center",
      headerStyle:{
        backgroundColor: COLORS.blue
      },
      headerShadowVisible: false,
      headerTintColor:COLORS.white

    }}/>



  </Stack.Navigator>
}
