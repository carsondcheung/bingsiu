import {Button} from '@components';
import auth from '@react-native-firebase/auth';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen(): JSX.Element {
  const user = auth().currentUser;
  return (
    <SafeAreaView>
      <View>
        <Text>Welcome {user?.email}</Text>
        <Button title="Sign out" onPress={() => auth().signOut()} />
      </View>
    </SafeAreaView>
  );
}
