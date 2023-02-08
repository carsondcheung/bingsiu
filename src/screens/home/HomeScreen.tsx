import {Button} from '@rneui/base';
import React from 'react';
import {Text, View} from 'react-native';

export default function HomeScreen(): JSX.Element {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Welcome" />
    </View>
  );
}
