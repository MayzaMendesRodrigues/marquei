import { enableScreens } from 'react-native-screens';
enableScreens();
import logo from '../../../assets/marquei.png'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Home';
import Calendar from '../Calendar';
import Profile from '../Profile';
import { Image } from 'react-native';
import { COLORS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
  <NavigationContainer>
<Tab.Navigator>

    <Tab.Screen 
    name="Home" 
    component={Home}
    options={{
      headerTitleAlign:"center" ,
      headerTitle:() => {
        return <>
        <Image 
        source={logo}
        style={{
          width:100,
          height:50,
         
        }}
        />
        </>
      }, 

      tabBarIcon:({focused})=> {
        return <>
    
      {/* Ícone de Home */}
      <Ionicons
       name={focused ? 'home' : 'home-outline'} 
       size={24}
        color={COLORS.purple}/>
    
           </>
      }
    }}/> 

    <Tab.Screen 
    name="Calendar" 
    component={Calendar}
        options={{
          headerTitleAlign:"center" ,
          headerTitle:() => {
            return <>
            <Image 
            source={logo}
            style={{
              width:100,
              height:50,
             
            }}
            />
            </>
          }, 
          tabBarShowLabel:false,
          tabBarIcon:({focused})=> {
            return <>
            <Ionicons
       name={focused ? 'calendar' : 'calendar-outline'} 
       size={24}
        color={COLORS.purple}/>
               </>
          }
        }}/>

    <Tab.Screen name="Profile" component={Profile}
        options={{
          headerTitleAlign:"center" ,
          headerTitle:() => {
            return <>
            <Image 
            source={logo}
            style={{
              width:100,
              height:50,
             
            }}
            />
            </>
          }, 
          tabBarShowLabel:false,
          tabBarIcon:({focused})=> {
            return <>
  <Ionicons
       name={focused ? 'person' : 'person-outline'} 
       size={24}
        color={COLORS.purple}/>
             
               </>
          }
        }}/>


</Tab.Navigator>
  </NavigationContainer>
  )
}
