import auth from '@react-native-firebase/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import Toast from 'react-native-toast-message';

import ChatScreen from './screens/chat/ChatScreen';
import HomeScreen from './screens/home/HomeScreen';
import SettingsScreen from './screens/settings/SettingsScreen';
import SignInScreen from './screens/signIn/SignInScreen';
import SignUpScreen from './screens/signUp/SignUpScreen';

const AuthStack = createNativeStackNavigator();
const AppTab = createBottomTabNavigator();

export default function App(): JSX.Element {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(() => {
      setUser(user);
      initializing && setInitializing(false);
    });
    return subscriber;
  });

  initializing && (
    <>
      <Text>Loading...</Text>
    </>
  );

  return (
    <NavigationContainer>
      {user ? (
        <AppTab.Navigator>
          <AppTab.Screen name="Home" component={HomeScreen} />
          <AppTab.Screen name="Chat" component={ChatScreen} />
          <AppTab.Screen name="Settings" component={SettingsScreen} />
        </AppTab.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen name="Sign In" component={SignInScreen} />
          <AuthStack.Screen name="Sign Up" component={SignUpScreen} />
        </AuthStack.Navigator>
      )}
      <Toast />
    </NavigationContainer>
  );
}
