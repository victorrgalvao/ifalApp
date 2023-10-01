import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './components/LoginScreen';
import ListScreen from './components/ListScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle:{elevation:5}}} initialRouteName="Login">
      <Stack.Screen  name="Login" component={LoginScreen} />
      <Stack.Screen name="Listagem" component={ListScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator  >
      <Tab.Screen
      
          name="login"
          component={MainStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-person" color={"black"} size={size} />
            ),headerShown:false
          }}
        />
        
      <Tab.Screen
      
          name="Listagem"
          component={ListScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-list" color={"black"} size={size} />
            ),headerShown:true
          }}
        />
        {/* Adicione mais abas conforme necessário */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
