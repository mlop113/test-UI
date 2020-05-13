import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/Home'
import { UpdatePassword } from './screens/UpdatePassword'
import { ConfirmRegister } from './screens/ConfirmRegister'
import { Profile } from './screens/Profile';
import {Card} from './screens/Card'
import { MyTabBar } from './screens/components/MyTabBar'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeCard() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
      <Stack.Screen options={{ headerShown: false }} name="Card" component={Card} />
    </Stack.Navigator>
  );
}
function MyProfile() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeCard} />
      <Tab.Screen name="Thanh Toán" component={Profile} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: "red"
            },
          }}
          name="Home"
          component={HomeScreen} />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: "red"
            },
          }}
          name="UpdatePassword"
          component={UpdatePassword} />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: "red"
            },
          }}
          name="ConfirmRegister"
          component={ConfirmRegister} />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: "red"
            },
          }}
          options={{ headerShown: false }}
          name="MyProfile"
          component={MyProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}