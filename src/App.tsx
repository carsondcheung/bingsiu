import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import ChatScreen from './screens/chat/ChatScreen';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/login/LoginScreen';
import SettingsScreen from './screens/settings/SettingsScreen';

const AuthStack = createNativeStackNavigator();
const AppTab = createBottomTabNavigator();

const isUserAuthenticated = false;
export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      {isUserAuthenticated ? (
        <AppTab.Navigator>
          <AppTab.Screen name="Home" component={HomeScreen} />
          <AppTab.Screen name="Chat" component={ChatScreen} />
          <AppTab.Screen name="Settings" component={SettingsScreen} />
        </AppTab.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen name="Login" component={LoginScreen} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}
