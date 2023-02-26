import auth from '@react-native-firebase/auth';
import {Button} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';

import {AppStyle} from '../../App.styles';

export default function SignUpScreen(): JSX.Element {
  return (
    <View style={AppStyle.parentContainer}>
      <Button
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }}>
        Sign Out
      </Button>
    </View>
  );
}
