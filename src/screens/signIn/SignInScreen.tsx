import auth from '@react-native-firebase/auth';
import {Button, Input} from '@rneui/themed';
import {Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {object, string} from 'yup';

import {AppStyle} from '../../App.styles';

export default function SignInScreen(): JSX.Element {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={object({
        email: string().email('Invalid email address').required('Required'),
        password: string().required('Required'),
      })}
      onSubmit={values =>
        auth()
          .signInWithEmailAndPassword(values.email, values.password)
          .then(userCredentials =>
            console.log('user signed in successfully with', userCredentials),
          )
          .catch(error => console.log(error.code))
      }
      validateOnChange={false}
      validateOnBlur={false}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={AppStyle.parentContainer}>
          <Input
            autoCapitalize="none"
            placeholder="Enter Email Address"
            leftIcon={<MaterialCommunityIcons name="account" size={20} />}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            errorMessage={errors.email}
            renderErrorMessage={!errors.email && touched.email}
          />
          <Input
            autoCapitalize="none"
            placeholder="Enter Password"
            leftIcon={<MaterialCommunityIcons name="lock" size={20} />}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            errorMessage={errors.password}
            renderErrorMessage={!errors.password && touched.password}
            secureTextEntry={true}
          />
          <Button onPress={handleSubmit}>Sign In</Button>
        </View>
      )}
    </Formik>
  );
}
