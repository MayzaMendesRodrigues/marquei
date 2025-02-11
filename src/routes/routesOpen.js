import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/index.jsx";
import Account from "../screens/Account/index.jsx";

const Stack = createNativeStackNavigator();
export default function RoutesOpen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="account"
        component={Account}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
