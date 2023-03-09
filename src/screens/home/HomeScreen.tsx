import {Button} from '@components';
import auth from '@react-native-firebase/auth';
import React from 'react';
import {Text, View} from 'react-native';

export default function HomeScreen(): JSX.Element {
  const user = auth().currentUser;
  return (
    <View>
      <Text>Welcome {user?.email}</Text>
      <Button title="Sign out" onPress={auth().signOut} />
    </View>
  );
}
