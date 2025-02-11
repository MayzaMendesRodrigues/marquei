import Routes from "./src/routes/routes.js";
import { AuthProvider } from "./src/context/auth.js";
import {NavigationContainer} from '@react-navigation/native';
import Account from "./src/screens/Account/index.jsx";
import Home from "./src/screens/Home/index.jsx";
import Schedule from "./src/screens/Schedule/index.jsx";
import ServicesBookings from "./src/screens/Services/index.jsx";
import Main from "./src/screens/Main/index.jsx";
import Login from "./src/screens/Login/index.jsx";
import Calendar from "./src/screens/Calendar/index.jsx";
import Appointments from "./src/components/Appointment/index.jsx";

export default function App() {
  return (

    <Account/>
  );
} 
{/** 
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
    */}