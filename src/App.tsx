import auth from '@react-native-firebase/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '@screens/chat/ChatScreen';
import HomeScreen from '@screens/home/HomeScreen';
import SettingsScreen from '@screens/settings/SettingsScreen';
import SignInScreen from '@screens/signIn/SignInScreen';
import SignUpScreen from '@screens/signUp/SignUpScreen';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import {AppTabParamList, AuthStackParamList} from './models/ScreenProps';

const AppTab = createBottomTabNavigator<AppTabParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

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
    <SafeAreaProvider>
      <NavigationContainer>
        {user ? (
          <AppTab.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <AppTab.Screen name="Home" component={HomeScreen} />
            <AppTab.Screen name="Chat" component={ChatScreen} />
            <AppTab.Screen name="Settings" component={SettingsScreen} />
          </AppTab.Navigator>
        ) : (
          <AuthStack.Navigator
            initialRouteName="SignIn"
            screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="SignIn" component={SignInScreen} />
            <AuthStack.Screen name="SignUp" component={SignUpScreen} />
          </AuthStack.Navigator>
        )}
        <Toast />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
